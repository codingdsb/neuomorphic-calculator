const screen = document.querySelector("#screen");
// grab the buttons ###########################################
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const decimalBtn = document.querySelector(".decimal");
const divideBtn = document.querySelector(".divide");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const multiplyBtn = document.querySelector(".multiply");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const subtractBtn = document.querySelector(".subtract");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const addBtn = document.querySelector(".add");
const zeroBtn = document.querySelector(".zero");
const lparenBtn = document.querySelector(".lparen");
const rparenBtn = document.querySelector(".rparen");
const equalsBtn = document.querySelector(".equals");
// #####################################################################

let allowDecimal = false;
let allowEquals = false;

const appendToExpression = (val) => {
  screen.innerText += val;
};

const removeLastCharacterFromExpression = () => {
  screen.innerText = screen.innerText.slice(0, -1);
};

// clear the screen
clearBtn.addEventListener("click", () => {
  screen.innerText = "";
});

// delete btn listener
deleteBtn.addEventListener("click", removeLastCharacterFromExpression);

// appending buttons
zeroBtn.addEventListener("click", () => {
  appendToExpression("0");
  allowEquals = true;
  allowDecimal = true;
});
lparenBtn.addEventListener("click", () => {
  appendToExpression("(");
  allowEquals = false;
  allowDecimal = false;
});
rparenBtn.addEventListener("click", () => {
  appendToExpression(")");
  // count value of lparens
  let lparenCount = 0;
  let rparenCount = 0;
  for (let i = 0; i < screen.innerText.length; i++) {
    if (screen.innerText[i] === "(") {
      lparenCount++;
    } else if (screen.innerText[i] === ")") {
      rparenCount++;
    }
  }
  if (lparenCount === rparenCount) {
    allowEquals = true;
  } else {
    allowEquals = false;
  }
  allowDecimal = false;
});
oneBtn.addEventListener("click", () => {
  appendToExpression("1");
  allowEquals = true;
  allowDecimal = true;
});
twoBtn.addEventListener("click", () => {
  appendToExpression("2");
  allowEquals = true;
  allowDecimal = true;
});
threeBtn.addEventListener("click", () => {
  appendToExpression("3");
  allowEquals = true;
  allowDecimal = true;
});
four.addEventListener("click", () => {
  appendToExpression("4");
  allowEquals = true;
  allowDecimal = true;
});
five.addEventListener("click", () => {
  appendToExpression("5");
  allowEquals = true;
  allowDecimal = true;
});
six.addEventListener("click", () => {
  appendToExpression("6");
  allowEquals = true;
  allowDecimal = true;
});
sevenBtn.addEventListener("click", () => {
  appendToExpression("7");
  allowEquals = true;
  allowDecimal = true;
});
eightBtn.addEventListener("click", () => {
  appendToExpression("8");
  allowEquals = true;
  allowDecimal = true;
});
nineBtn.addEventListener("click", () => {
  appendToExpression("9");
  allowEquals = true;
  allowDecimal = true;
});
decimalBtn.addEventListener("click", () => {
  if (!screen.innerText.endsWith(".") && allowDecimal) {
    appendToExpression(".");
    allowDecimal = false;
    allowEquals = false;
  }
});
addBtn.addEventListener("click", () => {
  if (!screen.innerText.endsWith(".") && allowDecimal) {
    appendToExpression("+");
    allowDecimal = false;
    allowEquals = false;
  }
});
subtractBtn.addEventListener("click", () => {
  if (!screen.innerText.endsWith(".") && allowDecimal) {
    appendToExpression("-");
    allowDecimal = false;
    allowEquals = false;
  }
});
multiplyBtn.addEventListener("click", () => {
  if (!screen.innerText.endsWith(".") && allowDecimal) {
    appendToExpression("×");
    allowDecimal = false;
    allowEquals = false;
  }
});
divideBtn.addEventListener("click", () => {
  if (!screen.innerText.endsWith(".") && allowDecimal) {
    appendToExpression("÷");
    allowDecimal = false;
    allowEquals = false;
  }
});
equalsBtn.addEventListener("click", () => {
  if (allowEquals) {
    let expression = screen.innerText;
    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("÷", "/");
    screen.innerText = math.evaluate(expression);
  }
});
