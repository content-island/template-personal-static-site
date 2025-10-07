---
title: 'Test Code Highlighting and Image Handling'
description: 'Prueba del resaltado de sintaxis y manejo de imágenes en código dentro de bloques y en línea. Asegura que las imágenes.'
pubDate: '2024-12-16'
image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
readTime: 5
---

Este es un artículo de prueba para verificar que el resaltado de sintaxis funciona correctamente y que las imágenes dentro de bloques de código no se renderizan como elementos `<img>`.

## Código JavaScript

```javascript
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';

function MyComponent() {
  return (
    <div>
      <Image src={heroImage} alt="Hero image" width={800} height={400} />
      <img src="https://example.com/image.jpg" alt="Test image" />
    </div>
  );
}
```

## Código Python

```python
import requests
from PIL import Image

def download_image(url):
    response = requests.get(url)
    # Esta línea contiene una referencia a imagen: <img src="test.jpg" />
    with open('image.jpg', 'wb') as f:
        f.write(response.content)

    return Image.open('image.jpg')

# Ejemplo de uso con una URL de imagen
image_url = "https://example.com/photo.png"
downloaded_image = download_image(image_url)
```

## Código HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Test Page</title>
  </head>
  <body>
    <h1>Mi página</h1>
    <img src="https://example.com/hero.jpg" alt="Hero image" class="responsive" />
    <p>Párrafo con una imagen inline: <img src="icon.png" alt="icon" /></p>
  </body>
</html>
```

## Código Astro

```astro
---
import { Image } from 'astro:assets';
import Layout from '../layouts/Layout.astro';
---

<Layout title="Test">
  <h1>Hello World</h1>
  <Image src="./hero.jpg" alt="Hero" width={800} height={400} />
  <img src="https://picsum.photos/400/300" alt="Random image" />
</Layout>
```

## Código inline

Aquí hay algunos ejemplos de código inline: `<img src="test.jpg" alt="test" />` y también `Image.open('photo.png')`.

El componente `<Image>` de Astro es mejor que usar `<img>` directamente.

## Texto normal

Este es texto normal que puede contener enlaces a imágenes como esta: ![Imagen de ejemplo](https://picsum.photos/300/200)

Y también puede tener imágenes HTML normales:

![Imagen de ejemplo](https://picsum.photos/300/200)

## Conclusión

Si todo funciona correctamente:

- El código dentro de bloques debe tener resaltado de sintaxis
- Las imágenes dentro de bloques de código NO deben renderizarse como elementos `<img>`
- Las imágenes fuera de bloques de código SÍ deben renderizarse normalmente
- El código inline debe mantener su formato sin procesar imágenes
