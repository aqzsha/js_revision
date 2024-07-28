// node.append(...nodes or strings) – добавляет узлы или строки в конец node,
// node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
// node.before(...nodes or strings) –- вставляет узлы или строки до node,
// node.after(...nodes or strings) –- вставляет узлы или строки после node,
// node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

{
  /* <ol id="ol">
  <li>0</li>
  <li>1</li>
  <li>2</li>
</ol> */
}

// <script>
ol.before('before'); // вставить строку "before" перед <ol>
ol.after('after'); // вставить строку "after" после <ol>

let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // вставить liFirst в начало <ol>

let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // вставить liLast в конец <ol>
// </script>

// "beforebegin" – вставить html непосредственно перед elem,
// "afterbegin" – вставить html в начало elem,
// "beforeend" – вставить html в конец elem,
// "afterend" – вставить html непосредственно после elem.

{
  /* <div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Привет</p>');
  div.insertAdjacentHTML('afterend', '<p>Пока</p>');
</script> */
}
