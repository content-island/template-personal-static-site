---
title: 'Cómo crear un formulario de contacto con Astro Server Actions y Resend'
description: 'Aprende a crear un formulario de contacto funcional en Astro usando Server Actions y Resend, sin necesidad de un backend separado.'
date: 2025-10-07
tags: ['Astro', 'Resend', 'Server Actions', 'Formularios', 'Email']
author: 'Tu Nombre'
---

# 📨 Crear un formulario de contacto con Astro Server Actions y Resend

Los formularios de contacto son una parte esencial de cualquier sitio web.  
Durante años, la única forma de implementarlos era montar un **backend propio** (con Express, Fastify, Laravel, etc.) o depender de **servicios externos** (como Formspree, Netlify Forms o Zapier).

Esto funcionaba, pero traía varios inconvenientes:

- Tenías que configurar y desplegar un servidor adicional.
- Gestionar **CORS**, **seguridad**, **rutas** y **autenticación**.
- O pagar por servicios externos con limitaciones en número de envíos.
- Y además, mantener el frontend y el backend por separado.

Con la llegada de **Astro Server Actions**, todo eso cambió.

Ahora podemos procesar formularios **directamente dentro de nuestro proyecto Astro**, sin API externa ni backend dedicado.  
Y si combinamos esto con **[Resend](https://resend.com)** —una API moderna y simple para enviar correos—, obtenemos una solución limpia, rápida y segura.

En este artículo aprenderás a crear un **formulario de contacto funcional** usando:

- [Astro](https://astro.build) 🪐
- **Server Actions** (nativas desde Astro 3.0)
- [Resend](https://resend.com) para enviar correos electrónicos

Al final tendrás un formulario completamente operativo, sin frameworks adicionales ni configuraciones complicadas.

---

## ⚙️ 1. Configuración inicial

Primero, crea un nuevo proyecto de Astro:

```bash
npm create astro@latest my-contact-form
cd my-contact-form
npm install
```

Asegúrate de tener Node 18+ y Astro 3.0 o superior.

## ⚙️ 2. Configura Server Actions

Para usar Server Actions, necesitamos un adaptador que soporte código del lado del servidor.
Instala el adaptador de Node.js (puedes elegir otro según tu plataforma de despliegue):

```bash
npm install @astrojs/node
```

Luego, actualiza tu `astro.config.mjs` para incluir el adaptador:

```diff
// @ts-check
import { defineConfig} from 'astro/config';
+ import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
+  adapter: node({
+    mode: 'standalone',
+  }),
  // otras configuraciones...
});
```

## ✉️ 3. Instala Resend

Resend es una API moderna para enviar correos electrónicos fácilmente.
Crea una cuenta gratuita y obtén tu API key desde el dashboard.

Instala el SDK oficial:

```bash
npm install resend
```

Luego, añade tus variables de entorno en un archivo `.env`:

```bash
RESEND_API_KEY=tu_api_key_aqui
FROM_EMAIL=tu_email_verificado_aqui
TO_EMAIL=email_destino_aqui
```

Y también agrégalas a tu `astro.config.mjs`:

```diff
export default defineConfig({
  // otras configuraciones...
  env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
      FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
      TO_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
    },
});
```

## 📝 4. Crea el formulario en Astro

Crea un nuevo archivo `src/pages/contact.astro` y añade el siguiente código:

```astro
<html lang="es">
  <head>
    <title>Contacto</title>
  </head>
  <body class="max-w-lg mx-auto p-6 font-sans">
    <h1 class="text-2xl mb-4 font-bold">Contáctanos</h1>

    {result?.success && (
      <p class="text-green-600 mb-4">¡Mensaje enviado correctamente!</p>
    )}
    {result && !result.success && (
      <p class="text-red-600 mb-4">Error al enviar el mensaje. Intenta más tarde.</p>
    )}

    <form method="post" class="grid gap-4">
      <input name="name" type="text" placeholder="Tu nombre" required class="border p-2 rounded" />
      <input name="email" type="email" placeholder="Tu correo" required class="border p-2 rounded" />
      <textarea name="message" placeholder="Tu mensaje" required class="border p-2 rounded h-32"></textarea>
      <button type="submit" class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Enviar
      </button>
    </form>
  </body>
</html>
```

## 🛠️ 5. Crea la acción del servidor

Creamos la carpteta `src/actions` y dentro un archivo `index.ts` para definir nuestra acción que enviará el correo:

_src/actions/index.ts_

```ts
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    await resend.emails.send({
      from: `Tu Sitio <${import.meta.env.FROM_EMAIL}>`,
      to: `${import.meta.env.TO_EMAIL}`,
      subject: `Nuevo mensaje de ${name}`,
      reply_to: email,
      text: message
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
};
```

## 6. Conecta el formulario con la acción

Ahora, volvamos a `src/pages/contact.astro` y conectemos el formulario con la acción que acabamos de crear:

```diff---
// otras importaciones...
import { sendEmail } from '../actions/index';

    const handleSubmit = async (event: SubmitEvent) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const result = await sendEmail(formData);
    };

    <form method="post" class="grid gap-4">

        <input name="name" type="text" placeholder="Tu nombre" required class="border p-2 rounded" />
        <input name="email" type="email" placeholder="Tu correo" required class="border p-2 rounded" />
        <textarea name="message" placeholder="Tu mensaje" required class="border p-2 rounded h-32"></textarea>
        <button type="submit" class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Enviar
        </button>
    </form>

    <Script>
      const form = document.querySelector('form');
      form.addEventListener('submit', handleSubmit);
    </Script>
```

## 🚀 Conclusión

Con Astro Server Actions y Resend, puedes construir un formulario de contacto profesional, seguro y mantenible sin complicaciones.
Es rápido, moderno y totalmente integrado en tu proyecto Astro.

Puedes encontrar el código implementado de este ejemplo en github: [enlace al repositorio](https://github.com/tu_usuario/tu_repositorio)
