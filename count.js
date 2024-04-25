let value = document.getElementById("value");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");
let input = document.getElementById("input");
let submitBtn = document.getElementById("Submit");

function updateCounter(newValue) {
  value.textContent = newValue;
}

incrementBtn.onclick = () => {

let convertNumberValue = Number(value.textContent);
let addPlusOne = convertNumberValue + 1;
value.innerHTML = addPlusOne;
};

decrementBtn.onclick = () => {
let convertNumberValue = Number(value.textContent);
let subMinOne = convertNumberValue -1;
value.innerHTML = subMinOne;
};

resetBtn.onclick = () => {
let convertNumberValue = Number(value.textContent);
let subMinOne = 0;
value.innerHTML = subMinOne;
};

submitBtn.onclick = () => {
  let newValue = parseInt(input.value);
 if (newValue >= 0 ) {
      updateCounter(newValue);
    }

};