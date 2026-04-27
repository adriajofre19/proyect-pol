# Deploy Next.js en IONOS con Plesk

Esta guia esta pensada para este proyecto (Next.js 16) y para desplegarlo en un servidor IONOS gestionado con Plesk.

## 1) Requisitos previos

1. Tener dominio o subdominio creado en Plesk.
2. Tener acceso SSH al servidor.
3. Tener habilitada la extension de Node.js en Plesk (si no aparece, activarla desde Extensions).
4. Usar Node.js 20.x (recomendado para Next.js 16).

## 2) Preparar el proyecto en local (antes de subir)

1. Verifica que compila bien:

```bash
npm ci
npm run build
```

2. Sube el proyecto al servidor por Git o SFTP.
3. No subas carpetas generadas localmente:

- node_modules
- .next

## 3) Subir el codigo al servidor

Puedes hacerlo de dos formas:

1. Git (recomendado):

- En Plesk, usa la extension Git y conecta tu repositorio.
- Define como ruta de despliegue la carpeta del sitio (normalmente httpdocs).

2. SFTP:

- Sube los archivos del proyecto a httpdocs.

## 4) Configurar Node.js en Plesk

En Plesk, entra al dominio y abre Node.js.

1. Node.js version: 20.x
2. Application mode: production
3. Application root: carpeta donde esta package.json (normalmente httpdocs)
4. Document root: httpdocs

## 5) Variables de entorno

En Node.js (Plesk), agrega variables de entorno necesarias (si aplica), por ejemplo:

- NODE_ENV=production
- Otras claves de correo/API que use el proyecto

Guarda cambios.

## 6) Instalar dependencias y compilar en servidor

Desde Plesk (Node.js) o por SSH, ejecuta:

```bash
npm ci
npm run build
```

## 7) Arranque de la aplicacion

### Opcion A (si Plesk permite argumentos de arranque)

1. Startup file: node_modules/next/dist/bin/next
2. Startup arguments: start -p 3000
3. Reinicia la app desde Plesk.

### Opcion B (si Plesk no permite argumentos facilmente)

Usa script npm (ya disponible en este proyecto):

```bash
npm run prod
```

Script prod = build + start.

## 8) Proxy y SSL

1. En Plesk, activa SSL (Let's Encrypt).
2. Verifica que el dominio responde por HTTPS.
3. Si usas puerto interno (3000), confirma que Plesk hace proxy al proceso Node.

## 9) Checklist final

1. Abre la home, blog, servicios y contacto.
2. Verifica que cargan imagenes.
3. Prueba envio de formulario/contacto (si aplica).
4. Revisa logs de Node.js en Plesk para errores.

## 10) Despliegues futuros (flujo recomendado)

1. Haces push al repositorio.
2. En servidor:

```bash
npm ci
npm run build
npm run start
```

O en un solo paso:

```bash
npm run prod
```

## 11) Problemas comunes

1. No carga en dev o en prod:

- Limpia cache y recompila:

```bash
npm run clean:cache
npm run build
```

2. Error de version de Node:

- Cambia a Node 20.x en Plesk.

3. Faltan variables de entorno:

- Revisa y guarda variables en Plesk Node.js.

4. Puerto ocupado:

- Reinicia proceso Node desde Plesk o ajusta puerto de arranque.

---

Si quieres, te preparo una version 2 de esta guia adaptada exactamente a tu panel (capturas paso a paso con los nombres exactos de menus que te salen en tu Plesk).

## 12) Configuracion exacta para tu caso (arenasmorapol.albertoinformatico.com)

Con los datos que me pasaste, esta es la configuracion correcta:

1. Node.js Version:

- Recomendado: 20.x (o 22.x LTS)
- Evita 24.x para este proyecto si no esta probado en tu servidor

2. Application Root:

- /arenasmorapol.albertoinformatico.com/httpdocs

3. Document Root:

- /arenasmorapol.albertoinformatico.com/httpdocs
- No pongas /public en Document Root para una app Next.js con Node

4. Application Startup File:

- app.js
- Ya esta creado en la raiz del proyecto y arranca Next con el puerto de entorno

5. Application Mode:

- production

6. Variables de entorno minimas:

- NODE_ENV=production

### Pasos exactos ahora mismo en Plesk

1. En Node.js de tu dominio, cambia:

- Node.js Version a 20.x
- Document Root a /httpdocs (sin /public)
- Startup File a app.js

2. Pulsa Save.

3. Pulsa NPM install.

4. Abre "Run Node.js commands" y ejecuta:

```bash
npm run build
```

5. Pulsa Restart App.

6. Prueba en:

- http://arenasmorapol.albertoinformatico.com

### Si sigue sin arrancar

1. Revisa logs en Plesk.
2. Verifica que existe este archivo en /httpdocs:

- app.js

3. Vuelve a ejecutar:

```bash
npm ci
npm run build
```
