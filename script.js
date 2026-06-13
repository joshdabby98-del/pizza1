const menuItems = [
  { name: "Small Pizza", price: "$14.49 plain | $2.75 per topping", category: "pizza", desc: "Choice of red or white garlic sauce." },
  { name: "Small Cauli Crust Pizza", price: "$19.99 plain | $2.75 per topping", category: "pizza", desc: "Choice of red or white garlic sauce." },
  { name: "Large Pizza", price: "$20.99 plain | $3.50 per topping", category: "pizza", desc: "Choice of red or white garlic sauce." },
  { name: "Chicken Wing Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Chunks of chicken medium wing sauce & mozzarella." },
  { name: "Veggie Lovers Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Black olives, mushrooms, onions, green peppers, broccoli, banana peppers & mozzarella." },
  { name: "Supreme Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Pepperoni, sausage, mushroom, onion, green pepper, black olives & mozzarella." },
  { name: "Hawaiian Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Ham, pineapple & mozzarella." },
  { name: "Gold Standard Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Honey mustard base, cup n' char pepperoni & hot honey drizzle." },
  { name: "Meat Lovers Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Pepperoni, sausage, bacon, ham & mozzarella." },
  { name: "C.B.R. Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Chicken, bacon, mozzarella & ranch base sauce." },
  { name: "Lasagna Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Sausage, pepperoni, mozzarella & ricotta cheese." },
  { name: "Rodeo Chicken Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "BBQ base with chicken, mozzarella, onion rings & touch of bacon." },
  { name: "Vegan Pizza", price: "$19.29 small | $28.99 large", category: "specialty", desc: "Plain cheese pizza made with vegan cheese & sauce." },
  { name: "Garlic Knots (6)", price: "$8.49", category: "sides", desc: "With marinara dipping sauce." },
  { name: "Bread Sticks w/ Cheese (10)", price: "$14.49", category: "sides", desc: "With marinara dipping sauce." },
  { name: "Pizza Logs (4)", price: "$9.49", category: "sides", desc: "With marinara dipping sauce." },
  { name: "Mozzarella Sticks (5)", price: "$9.49", category: "sides", desc: "With choice of dipping sauce." },
  { name: "Chicken Fingers (5)", price: "$12.49", category: "sides", desc: "With choice of dipping sauce." },
  { name: "Fried Pickle Spears", price: "$9.49", category: "sides", desc: "With ranch dipping sauce." },
  { name: "Fried Cheese Curds", price: "$9.49", category: "sides", desc: "With ranch dipping sauce." },
  { name: "Onion Rings", price: "$7.49", category: "sides", desc: "" },
  { name: "Fries or Tots", price: "Small $3.49 | Large $6.49", category: "sides", desc: "Choice of house or cajun seasoning." },
  { name: "Loaded Fries or Tots", price: "Small $5.49 | Large $9.49", category: "sides", desc: "With cheddar cheese, bacon & ranch dressing." },
  { name: "Dozen Wings", price: "$16.99", category: "wings", desc: "All chicken wing orders come with Bleu Cheese & celery." },
  { name: "Half Dozen Wings", price: "$8.99", category: "wings", desc: "All chicken wing orders come with Bleu Cheese & celery." },
  { name: "Boneless Wings (12)", price: "$13.99", category: "wings", desc: "All chicken wing orders come with Bleu Cheese & celery." },
  { name: "Sub (6\" / 12\")", price: "$7.99 / $12.99", category: "subs", desc: "Served on a white roll." },
  { name: "Sub Meats", price: "", category: "subs", desc: "Choice of meat: Ham, Turkey, Roast Beef, Salami, Capicola, BLT." },
  { name: "Sub Toppings", price: "", category: "subs", desc: "Choice of toppings: American, Swiss, Provolone cheese, lettuce, onion, tomato, banana peppers, jalapenos, pickles, green peppers, cucumbers, roasted red peppers, mayo & Italian dressing." }
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