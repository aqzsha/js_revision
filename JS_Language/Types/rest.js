let [name1, name2, ...rest] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Republic',
];

// rest это массив элементов, начиная с 3-го
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

let options = {
  title: 'Menu',
  height: 200,
  width: 100,
};

// title = свойство с именем title
// rest = объект с остальными свойствами
let { title, ...restp } = options;

// сейчас title="Menu", rest={height: 200, width: 100}
alert(restp.height); // 200
alert(restp.width); // 100
