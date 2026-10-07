---
title: Convertir una query string a un array
author: todoconk
pubDatetime: 2020-12-07T15:03:00Z
modDatetime: 2020-12-16T02:41:32Z
slug: convertir-query-string-a-un-array
featured: true
draft: false
tags:
  - php
  - backend
description: En PHP algunas veces usar parse_str() no soluciona el problema de convertir una query string a un array, también debemos utilizar parse_url.
---

Una cadena de consulta o *query string* se puede definir como aquellos datos que se envían a través de la URL al momento de hacer un request a una página web. Un servidor web puede manejar y acceder a esta información y utilizarla de la forma que sea necesaria.

Un ejemplo de query string:

```
somepage?pg_id=2&parent_id=2&document&video
```

La estructura de una query string se compone de añadir los atributos en forma de `clave=valor` después de un signo de interrogación `?`, siendo este un separador para que el servidor sepa dónde empieza la cadena de consulta. Además, es posible enviar varios atributos mediante el uso de `&`.

## Usemos un ejemplo para explicar

```
https://www.mydomain.tld/somepage?pg_id=2&parent_id=2&document&video
```

Y necesitamos convertirlo a un array:

```php
array(
  'pg_id' => 2,
  'parent_id' => 2,
  'document' => ,
  'video' =>
)
```

Algunas veces usar solamente `parse_str()` no soluciona el problema, obteniendo un resultado como este:

```php
array (
    [somepage?id] => 123
    [lang] => gr
    [size] => 300
)
```

En estos casos, para mejores resultados se puede combinar `parse_str()` con `parse_url()`:

```php
$url = "somepage?id=123&lang=gr&size=300";
parse_str( parse_url( $url, PHP_URL_QUERY), $array );
print_r( $array );
```

La función `parse_url` analiza y devuelve una matriz asociativa que contiene cualquiera de los diversos componentes de la URL que están presentes. Acepta 2 parámetros:

- **Url**: la URL en sí misma para analizar, donde los caracteres no válidos se reemplazan por `_`.
- **Component**: uno de `PHP_URL_SCHEME`, `PHP_URL_HOST`, `PHP_URL_PORT`, `PHP_URL_USER`, `PHP_URL_PASS`, `PHP_URL_PATH`, `PHP_URL_QUERY` o `PHP_URL_FRAGMENT`.

La función `parse_str` convertirá un string en variables, analizando la cadena de texto como si fuera un string de consulta pasado por medio de una URL. Recibe 2 parámetros:

- **str**: la cadena de texto de entrada, requerida.
- **arr**: el array donde estará el resultado del parse.

Aprovechando las ventajas de ambas funciones obtenemos el resultado esperado.

¡Hasta un próximo post!
