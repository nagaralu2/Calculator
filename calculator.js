const compute = () => {
  let output = document.getElementById('output');
  //Read and validate numbers
  let fno = elementById('firstNumber');
  let sno = elementById('secondNumber');
  if (isNaN(fno) || isNaN(sno)) {
    output.innerHTML = '<h3>' + `please enter valid numbers as input` + '</h3>';
    return;
  }

  //read radio buttons
  // let radios = document.querySelectorAll('input[type="radio"]:checked');
  // let value = radios.length > 0 ? radios[0].value : null;
  let value = getCheckBoxes();

  //Error Handling for Math Operations
  if (value == 0) {
    output.innerHTML = '<h3>' + `please select an option to compute` + '</h3>';
    return;
  }

  //Error Handling for Division
  if (value == 'divide' && sno == 0) {
    output.innerHTML = '<h3>' + `Dividing by zero is not permitted` + '</h3>';
    return;
  }

  //Math Operations
  let result = mathOperation(fno, value, sno);

  //Output
  if (value == 'divide') value = 'divid';
  output.innerHTML = '<h3>' + `The result of ${value}ing ${fno} and ${sno} is ${result}` + '</h3>';
};

const elementById = (id) => {
  return Number(document.getElementById(id).value);
};

const getCheckBoxes = () => {
  let radios = document.getElementsByName('math-operation');
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) return radios[i].value;
  }
  return 0;
};

const mathOperation = (fno, value, sno) => {
  if (value == 'add') return fno + sno;
  if (value == 'subtract') return fno - sno;
  if (value == 'multiply') return fno * sno;
  if (value == 'divide') return fno / sno;
};
