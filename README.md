# Cáritas Banyeres de Mariola · React

Proyecto web construido con React, React Router y Framer Motion.

## Estado de esta versión

- Panel de administración eliminado/desactivado para poder mantener la web sin base de datos ni PHP de pago.
- Contenido gestionado de forma estática desde el código fuente.
- Nueva foto `fs2.webp` integrada en la página **Ferias Solidarias** con texto propio.
- Build de producción generado en `dist/`.
- Formulario preparado para funcionar con **Resend mediante una función serverless** incluida en `api/contact.js`.

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Subida estática a cdmon Microplan

Puedes subir el contenido de la carpeta `dist/` al directorio público del hosting.

Importante: el Microplan de cdmon sirve la web estática, pero no ejecuta PHP ni funciones serverless. Por tanto, el formulario no podrá enviar correos desde cdmon Microplan por sí solo.

## Formulario con Resend

La función `api/contact.js` está preparada para desplegarse en un entorno serverless compatible, por ejemplo Vercel.

Variables de entorno necesarias:

```bash
RESEND_API_KEY=tu_api_key_de_resend
CONTACT_TO_EMAIL=correo_destino@dominio.com
RESEND_FROM_EMAIL=Cáritas Banyeres <onboarding@resend.dev>
```

Cuando uses un dominio verificado en Resend, cambia `RESEND_FROM_EMAIL` por una dirección del dominio verificado.

## Notas

- No hay ruta `/admin`.
- No hay `public/api/contact.php` ni `public/api/admin.php`.
- Las nuevas actualizaciones de contenido deben hacerse editando el código, ejecutando `npm run build` y subiendo de nuevo el contenido de `dist/`.
