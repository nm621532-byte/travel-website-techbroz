const tours = [
  ["Goa", 7999, "🏖️"],
  ["Manali", 9499, "🏔️"],
  ["Kerala", 8499, "🌴"],
  ["Ladakh", 12999, "🏍️"],
];
let n = 0;
trips.innerHTML = tours.map(
  ([place, price, icon]) =>
    `<div class="card">
      <span>${icon}</span><br>
      <b>${place}</b>
      <p>₹${price} / person</p>
      <button onclick="book()">Book Now ✈️</button>
    </div>`
).join("");
function book() {
  count.textContent = ++n;
}
