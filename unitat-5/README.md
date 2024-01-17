## Depuració

Per depurar un exercici a Google Chrome, primer cal obrir el fitxer html de l'exercici a VS Code.

Després, fer clic al botó de depuració de la barra lateral d'eines, fer clic al botó "Run and Debug" i seleccionar "Web App (Chrome)".

També es pot iniciar la depuració des de la barra d'eines: fer clic al botó "Run and Debug" i seleccionar "Start debugging", o bé prémer directament fn+F5 en macos o F5.


## Instal·lació dependències

Executeu la següent ordre en un terminal:

```sh
npm install
```


### Exercici 1

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 1</title>
  </head>
  <body>
    <script type="text/javascript"></script>
  </body>
</html>
```

Escriu un script en JavaScript que afegeixi un element div al final del body del codi HTML mostrat.

A més, com podries afegir contingut al nou element creat?

### Exercici 2

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 2</title>
  </head>
  <body>
    <div id="target-div"></div>
    <script type="text/javascript"></script>
  </body>
</html>
```

Escriu un script en JavaScript que insereixi un element p dins d’un element div amb l'id: target-div al codi HTML anterior.

### Exercici 3

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 3</title>
  </head>
  <body>
    <h1>Title</h1>
    <script type="text/javascript"></script>
  </body>
</html>
```

Escriu un script en JavaScript que canviï el contingut de l’element h1 del codi HTML anterior.

### Exercici 4

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 4</title>
  </head>
  <body>
    <h1 class="header">Title</h1>
    <script type="text/javascript"></script>
  </body>
</html>
```

Implementarem un script en JavaScript que elimini un element amb una classe específica del DOM. En particular, eliminarem l’element amb la classe de nom header del codi HTML anterior.

### Exercici 5

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 5</title>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <script type="text/javascript"></script>
  </body>
</html>
```

Escriu un script en JavaScript que iteri a través de tots els elements li de l’element ul del codi HTML anterior i afegeix un element button amb el text «Click Me!» al final de cadascun d’ells.

### Exercici 6

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 6</title>
  </head>
  <body>
    <img src="https://via.placeholder.com/150/0000FF/808080" />
    <img src="https://via.placeholder.com/150/606060/808080" />
    <img src="https://via.placeholder.com/150/FF0000/808080" />
    <script type="text/javascript"></script>
  </body>
</html>
```

Escriu un script en JavaScript que modifiqui la mida de totes les imatges del codi HTML anterior amb una mida específica.

A més, com podríem canviar la font de cadascuna de les imatges?

### Exercici 7

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 7</title>
  </head>
  <body>
    <script type="text/javascript"></script>
  </body>
</html>
```

Escriu un script en JavaScript que creï una taula dinàmica en el codi HTML anterior amb les dades llegides a partir del següent objecte:

```js
const data = [
  { name: "Joan", age: 30 },
  { name: "Pau", age: 25 },
  { name: "Miquel", age: 28 }
];
```

### Exercici 8

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 8</title>
  </head>
  <body>
    <form id="add-item-form">
      <label for="new-item-input">Ingressa un nou element:</label>
      <input type="text" id="new-item-input" required />
      <button type="submit">Afegir</button>
    </form>
    <ul id="item-list"></ul>
    <script type="text/javascript"></script>
  </body>
</html>
```

Escriu un script en JavaScript que permeti a l’usuari afegir nous elements a la llista (element ul del codi HTML anterior) mitjançant un formulari.

Per a això hauràs d’escriure el codi HTML corresponent en un formulari, incloent-hi almenys un element input de tipus text.

### Exercici 9

Donat el codi HTML següent:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercise 9</title>
    <style>
      body {
        /* Prevents the user from selecting text on the page */
        user-select: none;
      }

      .dropzone {
        width: 200px;
        height: 150px;
        background: #ccc;
        margin: 10px;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <h1>List 1</h1>

    <ul id="draggable-list">
      <li draggable="true">1</li>
      <li draggable="true">2</li>
      <li draggable="true">3</li>
    </ul>

    <h1>List 2</h1>

    <ul class="dropzone" id="drop-target">
      <li draggable="true">4</li>
      <li draggable="true">5</li>
      <li draggable="true">6</li>
    </ul>
  
    <script type="text/javascript"></script>
  </body>
</html>
```

Com pots observar, el codi HTML anterior conté dues llistes. Escriu un script en JavaScript que permeti a l’usuari arrossegar i deixar anar elements d’una llista a una altra, i que actualitzi automàticament l’ordre dels elements en les llistes sobre la base del seu valor numèric.
