const categoryEl = document.getElementById("category");
const valueEl = document.getElementById("value");
const fromUnitEl = document.getElementById("fromUnit");
const toUnitEl = document.getElementById("toUnit");
const resultEl = document.getElementById("result");

// Integer variable (requirement)
let decimalPlaces = 4;

/*
Each category converts THROUGH a base unit.
Length base = meter
Weight base = gram
*/
const units = {
  length: {
    base: "meter",
    options: {
      inch: 0.0254,
      foot: 0.3048,
      meter: 1,
      kilometer: 1000,
      mile: 1609.34,
    },
  },
  weight: {
    base: "gram",
    options: {
      gram: 1,
      kilogram: 1000,
      pound: 453.592,
      ounce: 28.3495,
    },
  },
};

// Populate dropdowns
function populateUnits() {
  const category = categoryEl.value;
  const options = units[category].options;

  fromUnitEl.innerHTML = "";
  toUnitEl.innerHTML = "";

  for (let unit in options) {
    fromUnitEl.innerHTML += `<option value="${unit}">${unit}</option>`;
    toUnitEl.innerHTML += `<option value="${unit}">${unit}</option>`;
  }

  convert();
}

// Conversion logic
function convert() {
  const category = categoryEl.value;
  const value = parseFloat(valueEl.value);

  // IF/ELSE + LOGICAL OPERATOR
  if (!isNaN(value) && value >= 0) {
    const from = fromUnitEl.value;
    const to = toUnitEl.value;
    const factors = units[category].options;

    // Math operations
    const baseValue = value * factors[from];
    const result = baseValue / factors[to];

    // Output to console (requirement)
    console.log("Conversion result:", result);

    // Output to DOM
    resultEl.textContent = `${value} ${from} = ${result.toFixed(
      decimalPlaces
    )} ${to}`;
  } else {
    resultEl.textContent = "Please enter a valid number";
  }
}

// Event listeners
categoryEl.addEventListener("change", populateUnits);
valueEl.addEventListener("input", convert);
fromUnitEl.addEventListener("change", convert);
toUnitEl.addEventListener("change", convert);

// Initialize
populateUnits();
