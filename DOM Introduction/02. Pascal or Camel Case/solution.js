function solve() {
  let input = document.getElementById('text').value;
  let transformationCase = document.getElementById('naming-convention').value;
  let result;
  
  input = input.split(' ');

  if (transformationCase === "Camel Case") {
    result = input.map((elm, i) => i === 0 ? elm.substring(0, 1).toLowerCase() + elm.substring(1).toLowerCase() : elm.substring(0, 1).toUpperCase() + elm.substring(1).toLowerCase());
    result = result.reduce((acc, elm) => acc += elm);
    
  } else if (transformationCase === "Pascal Case") {
    result = input.map((elm) => elm.substring(0, 1).toUpperCase() + elm.substring(1).toLowerCase())
    result = result.reduce((accumulator, elm) => accumulator += elm);
    
  } else {
    result = 'Error!';
  }

  document.getElementById('result').innerText = result;
}