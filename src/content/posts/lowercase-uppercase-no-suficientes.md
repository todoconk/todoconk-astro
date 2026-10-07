---
title: Lowercase y Uppercase no son suficientes
author: todoconk
pubDatetime: 2020-12-21T13:01:00Z
modDatetime: 2021-01-08T03:07:27Z
slug: lowercase-uppercase-no-suficientes
featured: true
draft: false
tags:
  - javascript
  - handlebars
description: Muchas veces las funciones de Lowercase o Uppercase no son suficientes y al formatear contenido necesito que tenga la primera letra en mayúscula.
---

Javascript es un lenguaje muy potente y versátil, nos permite expandir las posibilidades de uso al máximo de nuestras necesidades y creatividad. Muchas veces las funciones de Lowercase o Uppercase no son suficientes a la hora de formatear contenido, cuando todo está en mayúsculas y necesito que tenga formato de título, es decir, la primera letra en mayúscula.

Todos los objetos en JavaScript tienen una propiedad especial llamada `prototype` que es una referencia a otro objeto simulando una herencia. Si queremos agregar métodos o propiedades a un objeto podemos hacerlo mediante el `prototype`, esto es muy útil para encapsular y reutilizar código.

Cuando necesitamos usar un Title Case para que cada palabra comience con mayúscula, este método fue creado precisamente para solucionar este problema.

```javascript
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
```

Si quieres que sea una función nativa de String podríamos agregarlo en prototype:

```javascript
String.prototype.toTitleCase = function() {
  return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
```

Si probamos la función anterior tendremos:

```javascript
console.log('hola mundo'.toTitleCase());
// > Hola Mundo
```

## ¿Dónde más podemos usarlo?

Podríamos aplicarlo en [Handlebars.js](https://handlebarsjs.com/), un motor de plantillas muy popular, registrando un helper que aplique el método:

```javascript
Handlebars.registerHelper('toTitleCase', function (str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
})
```

```
{{toTitleCase 'hola mundo'}}
// > Hola Mundo
```

¿Sabes de algún otro lugar donde las funciones de Lowercase o Uppercase no sean suficientes? Espero les sea tan útil como a mí. ¡Hasta un próximo post!
