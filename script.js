let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
  addClickEffect(value);
}

function addClickEffect(val) {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    if (btn.textContent === val) {
      btn.classList.add("clicked");
      setTimeout(() => {
        btn.classList.remove("clicked");
      }, 400);
    }
  });
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
