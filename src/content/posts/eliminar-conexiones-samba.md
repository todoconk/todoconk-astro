---
title: Cómo eliminar las conexiones activas con Samba
author: todoconk
pubDatetime: 2020-12-14T13:42:00Z
modDatetime: 2021-01-08T03:04:28Z
slug: eliminar-conexiones-samba
featured: false
draft: false
tags:
  - cmd
  - samba
  - windows
description: Cómo eliminar las conexiones activas con Samba u otro sistema de compartición de archivos basado en Windows con un par de comandos en tu cmd.
---

Los servidores con Samba u otro sistema de compartición de archivos basado en Windows pueden darte dolores de cabeza cuando no están configurados correctamente.

**Samba** es una implementación libre del protocolo de archivos compartidos de Microsoft Windows (antiguamente llamado SMB, renombrado recientemente a CIFS) para sistemas de tipo UNIX.

Es posible que computadoras con GNU/Linux, Mac OS X o Unix en general se vean como servidores o actúen como clientes en redes de Windows.

Un exceso de conexiones a tu servidor con SMB puede ocasionar errores de conexión y entregar diferentes mensajes a los clientes.

## Síntomas

Cuando un equipo no puede conectarse a un servidor de archivos que admita el protocolo SMB, recibirá un mensaje de error similar a:

Al usar un comando `DIR` con una ruta UNC:

```
Firma no válida
```

Al ejecutar un comando `NET USE`:

```
Se produjo el error 2148073478 del sistema
```

## Solución

Para resolver este problema debemos eliminar las conexiones activas con Samba ejecutando estos pasos:

Abrí:

```
Inicio > Ejecutar > cmd
```

Luego escribí en la consola:

```
net use * / delete
```

Este comando elimina todas las conexiones activas en el equipo local.

Otra opción rápida es escribir directamente en ejecutar:

```
Inicio > Ejecutar > net use * / delete /y
```

Si los problemas se mantienen, lo más recomendable es contactar al proveedor.
