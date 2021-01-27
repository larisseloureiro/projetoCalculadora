var last = 0;

function trataClick(content) {
  let screen = document.getElementById("resp");
  if (screen.value == "undefined") { screen.value = null; }
  if (last == '-' && content == '-');
  else if (last == '*' && content == '*');
  else if (last == '+' && content == '+');
  else if (last == '/' && content == '/');
  else if (screen.value == "") { if (content == '-' | content == '+' | content == '*' | content == '/'); else { screen.value += content; } }
  else { screen.value += content; }
  last = content;
}

function limpa() {
  let screen = document.getElementById("resp");
  screen.value = null;
}

function calcular() {
  let screen = document.getElementById("resp");
  screen.value = eval(screen.value);
}