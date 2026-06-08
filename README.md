# Battle For Embolia — Sitio web

Sitio web oficial de **Battle For Embolia**, un MMORPG indie de acción desarrollado por Ager Games.
Construido con [Astro](https://astro.build) + Tailwind CSS v4.

## Estado actual

### Secciones implementadas

| Sección | Componente | Descripción |
|---------|-----------|-------------|
| **Header** | `Header.astro` | Navbar fija con logo, enlaces, selector ES/EN, menú hamburguesa, sección activa por IntersectionObserver |
| **Hero** | `Hero.astro` | Pantalla completa con imagen de fondo, logo, tagline, botones Steam/Itch, countdown al 3 de julio 2026, animación de lanzamiento |
| **Tráiler** | `Trailer.astro` | Embed de YouTube del tráiler promocional |
| **Sobre el juego** | `About.astro` | 3 tarjetas: 3 personajes, 10 zonas, primer raid boss |
| **Características** | `Features.astro` | Grid responsive con 6 features del juego |
| **Requisitos del sistema** | `SystemRequirements.astro` | Tabla requisitos mínimos y recomendados |
| **Idiomas** | `Languages.astro` | Tabla con 11 idiomas y soporte interfaz/audio/subtítulos |
| **Galería** | `Gallery.astro` | Grid masonry con 6 capturas, modal lightbox con navegación por teclado |
| **Roadmap** | `Roadmap.astro` | Línea de tiempo vertical con 5 hitos del desarrollo |
| **FAQ** | `FAQ.astro` | Acordeón con 7 preguntas frecuentes |
| **Desarrollador** | `Developer.astro` | Sección del estudio con banner, descripción, enlaces a juegos anteriores |
| **Comunidad** | `Community.astro` | Enlaces a Discord, YouTube, Facebook, Steam, Ager Games + botón copiar email |
| **Footer** | `Footer.astro` | Logo, tagline, botones Steam/Itch, enlaces, copyright |
| **Scroll to Top** | `ScrollToTop.astro` | Botón flotante que aparece al scrollear |

### Infraestructura

- **Idiomas**: Español (por defecto) e Inglés, con módulo `src/i18n/` tipado
- **SEO**: Open Graph, Twitter Cards, JSON-LD (VideoGame schema), hreflang, canonical, robots.txt, sitemap
- **Rendimiento**: Lazy loading de imágenes, formatos AVIF/WebP/JPEG, animaciones respetan `prefers-reduced-motion`
- **Seguridad**: CSP en cabeceras HTTP y meta tag
- **PWA**: manifest.json, theme-color, apple-mobile-web-app
- **404**: Páginas de error personalizadas en ES y EN

## Estructura del proyecto

```text
src/
├── assets/images/       # Imágenes del juego (hero, galería, banners, logos)
├── components/          # 15 componentes de secciones
├── i18n/                # Traducciones ES/EN tipadas
├── layouts/
│   └── BaseLayout.astro # Layout base con SEO, meta, JSON-LD, fuentes
├── pages/
│   ├── index.astro      # Home ES
│   ├── 404.astro        # Error ES
│   └── en/              # Versión en inglés
├── styles/
│   └── global.css       # Tailwind v4 + animaciones + utilidades
├── package.json
└── tsconfig.json
```

## Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build estático en `./dist/` |
| `npm run preview` | Preview del build local |
| `npm run check` | Type-check del proyecto |
