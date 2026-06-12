const menuItems = [
  { name: "Cheese Pizza", price: "$12.99", category: "pizza" },
  { name: "Pepperoni Pizza", price: "$14.99", category: "pizza" },
  { name: "Cheeseburger", price: "$10.99", category: "burgers" },
  { name: "Bacon Burger", price: "$12.49", category: "burgers" },
  { name: "Soda", price: "$2.50", category: "drinks" },
  {
    name: "Friday Fish Fry",
    price: "$14.99",
    category: "specials",
    desc: "Haddock, coleslaw, roll, french fries or mac & cheese"
  }
];

let current = "all";

/* ---------- MENU RENDER ---------- */
function render() {
  const grid = document.getElementById("menuGrid");
  grid.innerHTML = "";

  menuItems
    .filter(item => current === "all" ? true : item.category === current)
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "card";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.desc || ""}</p>
        <strong>${item.price}</strong>
      `;

      grid.appendChild(div);
    });
}

/* ---------- FILTER ---------- */
function filterMenu(category) {
  current = category;
  render();
}

/* ---------- STATUS (OPEN / CLOSED) ---------- */
function updateStatus() {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();

  const hours = {
    0: [11, 20],
    1: [11, 20],
    2: [11, 20],
    3: [11, 20],
    4: [11, 20],
    5: [11, 21],
    6: [11, 23]
  };

  const [open, close] = hours[day];
  const status = document.getElementById("status");

  const isOpen = hour >= open && hour < close;

  status.textContent = isOpen ? "OPEN NOW" : "CLOSED";

  status.classList.remove("open", "closed");
  status.classList.add(isOpen ? "open" : "closed");
}

/* ---------- INIT ---------- */
render();
updateStatus();
setInterval(updateStatus, 60000);