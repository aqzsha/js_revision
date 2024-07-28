{
  /* <head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>

  Красный текст
  <script>
    alert(document.body.style.color); // пусто
    alert(document.body.style.marginTop); // пусто
  </script>
</body> */
}

{
  /* <head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>

  <script>
    let computedStyle = getComputedStyle(document.body);

    // сейчас мы можем прочитать отступ и цвет

    alert( computedStyle.marginTop ); // 5px
    alert( computedStyle.color ); // rgb(255, 0, 0)
  </script>

</body> */
}
