function solve() {
  let fullText = document.getElementById('input').value;
  let textArr = fullText.split('.').filter(elm => elm);
  let paragraph;
  let text = '';

  for (let i = 0; i < textArr.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      if (textArr[i + j]) {
        text += `${textArr[i + j]}.`;
      }
    }
    paragraph = `<p>${text.trim()}</p>`;
    document.getElementById('output').innerHTML += paragraph;
    text = '';
  }
}