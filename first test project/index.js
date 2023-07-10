const btn = document.getElementById('btn');

var currentColorID = 0;
var colors = ['yellow', 'red', 'green']

btn.addEventListener('click', function onClick() {
  var prevColor = colors[currentColorID];
  currentColorID = (currentColorID + 1) % colors.length;
  var nextColor = colors[currentColorID];

  var elements = Array.from(document.getElementsByClassName(prevColor));

  elements.forEach(element => {
    element.classList.remove(prevColor);
    element.classList.add(nextColor);
  });

  //cololur.setAttribute('style','color: red')
});

var numbers = [15, 23, 6, 3, 7453, 23, 6532]
console.log(numbers)

numbers = numbers.filter(number => number<100 )
console.log(numbers)

var modulos5 = numbers.map(number => number%5)
console.log(modulos5)

console.log(numbers.sort((a,b) => b-a))


/*
JS
1. Jakie są różnice między const, let, var
2. document.querySelector()
3. alert(), prompt()...
3. Operacje na listach: filter(), map(), sort()
4. Tworzenie elementów HTML

Na razie tyle ;P
W dalekiej przyszłości jQuery

CSS / HTML
1. @media screen and (max-width: 599px) 
2. FLEX
3. GRID
4. 


TAKIE INNE PROGRAMISTYCZNE WAŻNE DO OGARNIĘCIA
1. Modulo
2. Regex

*/