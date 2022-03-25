var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
  aleatorio: Math.random(),
  mifuncion: function () {
    return 'hola mundo';
  },
  misuma: function (a, b) {
    return a + b;
  },
};

//console.log(myCar.misuma(2, 3));
//console.log(myCar.mifuncion());

myCar.hasOwnProperty;

//console.log(myCar.hasOwnProperty('model'));

//delete

for (var llave in myCar) {
  if (myCar.hasOwnProperty(llave)) {
    let s = myCar[llave];
    //console.log(myCar[llave])
    //console.log(myCar[llave])
  }
}

/*
for (var i in myCar) {
  // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
  if (myCar.hasOwnProperty(i)) {
    result += `${objName}.${i} = ${obj[i]}\n`;
  }
}
*/

/*
//car1 = new Car();
car2 = new Car('make', 'model', 1970, 'yo');
console.log(car2.model);


console.log(car1.color);    // undefined

Car.prototype.color = 'color original';
console.log(car1.color);    // 'color original'

car1.color = 'black';
console.log(car1.color);    // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'color original'
console.log(Object.getPrototypeOf(car2).color); // 'color original'
console.log(car1.color);   // 'black'
console.log(car2.color);   // 'color original'
*/
