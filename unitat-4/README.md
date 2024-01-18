## Depuració

Per depurar un exercici amb node.js, primer cal obrir el fitxer .js de l'exercici a VS Code.

Després, fer clic al botó de depuració de la barra lateral d'eines, fer clic al botó "Run and Debug" i seleccionar "Node.js".

També es pot iniciar la depuració des de la barra d'eines: fer clic al botó "Run and Debug" i seleccionar "Start debugging", o bé prémer directament fn+F5 en macos o F5.


## Introducció a l'asincronia en JavaScript

### Exercici 1

Donat el codi següent, quina seria la seva sortida per consola? Per què?

```js
setTimeout(function () {
  console.log("Timeout");
}, 1000);

function randomFunction() {
  console.log("Function");
}

console.log("Main Block");
```

### Exercici 2

Modifica la funció prèvia perquè s’executin tots els console.log().

Hi hauria altres maneres d’instanciar randomFunction() ?

### Exercici 3

Donat el codi següent, quina seria la seva sortida per consola? Per què? Tingues en compte que són funcions fletxa.

```js
const first = () => console.log("First");
const second = () => setTimeout(() => console.log("Second"));
const third = () => console.log("Third");
```

### Exercici 4

Donat el codi següent, quina seria la seva sortida per consola? Per què?

```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

### Exercici 5

Donat el codi següent, quina seria la seva sortida per consola? Per què?

```js
function first() {
  console.log(1);
}

function second() {
  setTimeout(() => {
    console.log(2);
  }, 0);
}

function third() {
  console.log(3);
}

first();
second();
third();
```

### Exercici 6

Donat el codi següent, quina seria la seva sortida per consola? Per què?

```js
(function () {
  console.log(10);
  setTimeout(function () {
    console.log(20);
  }, 1000);
  setTimeout(function () {
    console.log(30);
  }, 0);
  console.log(40);
})();
```

## Callbacks

### Exercici 7

Modifica el codi següent perquè compleixi amb els següents requisits:

- Modificar la funció greet, perquè rebi també un mètode com a paràmetre. Aquest mètode ha d’executar-se en acabar l’execució de la funció.

- Executar la funció greet passant com a paràmetres el nom Pepito i la funció farewell.

```js
function greet(name) {
  console.log("Hello Mr." + " " + name);
}

function farewell() {
  console.log("Goodbye Mr. Jose");
}
```

### Exercici 8

Modifica el codi següent perquè compleixi amb els següents requisits:

- Modificar la funció greet, perquè rebi també un mètode com a paràmetre. Aquest mètode ha d’executar-se en acabar l’execució de la funció, passant com a paràmetre name.

- Executar la funció greet passant com a paràmetres el nom Pepito i la funció farewell , amb un temporitzador de 3 segons.

```js
function greet(name) {
  console.log("Hello Mr." + " " + name);
}

function farewell() {
  console.log("Goodbye Mr. Jose");
}
```

### Exercici 9

Modifica el codi següent perquè compleixi amb els següents requisits:

- Modificar la funció buildCar, perquè rebi també un mètode com a paràmetre. Aquest mètode ha d’executar-se en acabar l’execució de la funció, passant com a paràmetre name.

- Executar la funció buildCar passant com a paràmetres el nom Ford Focus i la funció defineCar.

```js
function builtCar(name) {
  setTimeout(() => {
    console.log("Building a" + " " + name);
  }, 1000);
}

function defineCar(name) {
  console.log("This car is a" + " " + name);
}
```

### Exercici 10

Quina seria la sortida per pantalla del següent fragment de codi? Intenta deduir-ho sense haver d’executar-lo. Descriu breument el seu comportament.

```js
function hellishFunction() {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2);
      setTimeout(() => {
        console.log(3);
      }, 500);
    }, 2000);
  }, 1000);
}
```

### Exercici 11

Quina seria la sortida per pantalla del següent fragment de codi? Intenta deduir-ho sense haver d’executar-lo. Descriu breument el seu comportament.

```js
const visited = [];

function walk() {
  setTimeout(function () {
    visited.push("London");
    setTimeout(function () {
      visited.push("Milan");
      setTimeout(function () {
        visited.push("Madrid");
        setTimeout(function () {
          visited.push("Barcelona");
          console.log(visited.toString());
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

walk();
```

### Exercici 12

Quina seria la sortida per pantalla del següent fragment de codi? Intenta deduir-ho sense haver d’executar-lo. Descriu breument el seu comportament.

```js
const mainFunction = (callback) => {
  setTimeout(() => {
    callback([10, 3, 7]);
  }, 3000);
};

const addFunction = (array) => {
  let sum = 0;
  for (const i of array) {
    sum += i;
  }
  console.log(sum);
};

mainFunction(addFunction);
```

## Promeses

### Exercici 13

Modifica la funció següent perquè segueixi les següents regles:

- Retornar una promesa.

- Resoldre aquesta promesa després de 5 segons amb el valor de piNumber.

```js
function asyncPi() {
  const pi = 3.14;
}
```

### Exercici 14

Modifica la funció següent perquè segueixi les següents regles:

- Retornar una promesa.

- Si el paràmetre d’entrada no és un número, hauria de rebutjar-se després d’1 segon amb el següent text com a dades: Not a Number.

- Si el paràmetre d’entrada és un número, hauria de resoldre la promesa després de 10 segons amb la següent informació: (número de data) is a number.

```js
function isANumber(data) {
}
```

### Exercici 15

Modifica el codi següent perquè segueixi les següents regles:

- Cridar el mètode asyncCall.

- Quan el mètode acabi i retorni informació, mostrar aquesta informació per consola.

```js
function asyncCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("You should see this message in console after 5 secs");
    }, 5000);
  });
}
```

### Exercici 16

Analitza el codi següent. Quina seria la seva sortida per consola i per què?

```js
function asyncFunction() {
  return new Promise(function (resolve, reject) {
    reject(new Error("reason"));
  });
}

let promise = job();

promise
  .then(function () {
    console.log("First then");
  })
  .then(function () {
    console.log("Second then");
  })
  .then(function () {
    console.log("Third then");
  })
  .catch(function () {
    console.log("First error");
  })
  .then(function () {
    console.log("Fourth then");
  });
```

### Exercici 17

Modifica el codi següent perquè segueixi les següents regles:

- Generar una promesa que encadeni les promeses que retornin les següents funcions.
- Quan es resolguin totes les promeses, mostrar per consola les dades de cada mètode i, al final, mostrar el text Finish.

```js
let firstPromise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 5000, "firstPromise");
});

let secondPromise = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, "SecondPromise");
});
```

### Exercici 18

Modifica el codi següent perquè compleixi amb els següents requisits:

- Mostrar per pantalla les respostes de p1, p2 i p3 una vegada es resolguin

- Mostrar per pantalla el text error, en el cas que falli alguna crida.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise");
    resolve("First");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise");
    resolve("Second");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third promise");
    resolve("Third");
  }, 10000);
});
```

### Exercici 19

Quina seria la sortida per pantalla del codi prèviament desenvolupat si el contingut de p2 fos el següent? Intenta deduir-ho sense haver d’executar-lo. Descriu breument el seu comportament.

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise");
    reject("Second");
  }, 2000);
});
```

### Exercici 20

Modifica el codi següent perquè compleixi amb els següents requisits:

- Mostrar per pantalla la resposta de la primera promesa que es resolgui.

- Mostrar per pantalla el text error, en el cas que falli primer una promesa.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("First Promise");
    resolve("First");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Second Promise");
    resolve("Second");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Third promise");
    reject("Third");
  }, 2000);
});
```

## Generadors

### Exercici 21

Escriu una funció generador splitSentence que compleixi els requisits següents:

- Rebre com a paràmetre una frase.

- Separar aquesta frase per paraules.

- Cada vegada que es crida next(), retornar una paraula fins que acabi.

### Exercici 22

Escriu una funció generador de números de Fibonacci amb els següents requisits:

- Tenir com a nom limitedFibonacci.

- Rebre com a paràmetre un número n que definirà el màxim de números que pot retornar.

- Calcular la seqüència.

- Quan s’aconsegueixi el màxim n de crides, la funció generador haurà de retornar com a done=true.

### Exercici 23

Reescriu la següent funció com una funció async :

```js
function processRandomData(url) {
  return getRandomDataFromUrl(url)
    .catch((e) => sendErrorMessage(url))
    .then((v) => doSomethingCoolWithData(v));
}
```

### Exercici 24

Reescriu la següent funció com una funció async tenint en compte les consideracions següents:

- El paràmetre result és una promesa que llança una id quan es resol.

```js
function job(result, database, errorManager) {
  return result
    .then(function (id) {
      return database.get(id);
    })
    .then(function (info) {
      return info.name;
    })
    .catch(function (error) {
      errorManager.notify(error);
      throw error;
    });
}
```

### Exercici 25

Modifica el següent codi perquè sigui gestionat mitjançant async/await , tenint en compte les consideracions següents:

- El mètode randomAfter5Seconds retorna una promesa que es resol cada 5 segons amb un valor numèric a l’atzar.

```js
function randomMathPromise(x) {
  return new Promise((resolve) => {
    randomAfter5Seconds().then((a) => {
      randomAfter5Seconds().then((b) => {
        randomAfter5Seconds().then((c) => {
          resolve(x + a - b * c);
        });
      });
    });
  });
}

randomMathPromise(7).then((calc) => {
  console.log(calc);
});
```

### Exercici 26

Reescriu el següent codi utilitzant async/await en lloc the then/catch:

```js
function loadJsonFromAPI(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJsonFromAPI("https://randomservice.com/apiendpoint").catch(alert);
```
