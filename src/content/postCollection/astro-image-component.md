---
title: 'Astro Image component - Guía completa'
description: 'Guía completa sobre el componente Image de Astro: optimización automática, lazy loading y mejores prácticas para imágenes web.'
pubDate: '2024-12-15'
image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop'
readTime: 5
---

El componente Image de Astro es una herramienta poderosa para optimizar automáticamente las imágenes en tu sitio web, mejorando significativamente el rendimiento y la experiencia del usuario.

El componente Image de Astro es una herramienta poderosa para optimizar automáticamente las imágenes en tu sitio web, mejorando significativamente el rendimiento y la experiencia del usuario.

## Características principales

- **Optimización automática**: Convierte imágenes a formatos modernos como WebP y AVIF
- **Lazy loading**: Carga las imágenes solo cuando son necesarias
- **Responsive images**: Genera múltiples tamaños automáticamente
- **Type safety**: Validación de rutas en tiempo de compilación

## Uso básico

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Image src={heroImage} alt="Imagen hero del artículo" width={800} height={400} format="webp" />
```

## Imágenes remotas

Para imágenes que no están en tu proyecto:

```astro
<Image src="https://picsum.photos/800/400" alt="Imagen remota" width={800} height={400} inferSize />
```

## Optimizaciones avanzadas

### Múltiples formatos

```astro
<Image src={heroImage} alt="Hero" formats={['webp', 'avif', 'jpeg']} fallbackFormat="jpeg" />
```

[Documentación oficial](https://docs.astro.build/en/guides/images/)

### Responsive design

```astro
<Image
  src={heroImage}
  alt="Hero"
  widths={[400, 800, 1200]}
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
/>
```

## Mejores prácticas

1. **Siempre incluye alt text** para accesibilidad
2. **Especifica width y height** para evitar layout shift
3. **Usa lazy loading** para imágenes below the fold
4. **Optimiza el formato** según el contenido de la imagen

## Performance tips

- WebP para fotografías generales
- AVIF para máxima compresión
- PNG para imágenes con transparencia
- SVG para iconos e ilustraciones simples

El componente Image de Astro hace que la optimización de imágenes sea automática y eficiente, permitiéndote enfocar te en crear contenido excepcional.
