# Web Dennys Carrillo — DJ & Productor

Web presentación animada para **Dennys Carrillo** (DJ / Productor · Open Format).
Construida con **Astro 5 + Vue 3 + Tailwind + GSAP + Lenis**.

> "La música nació libre."

## Stack

- **Astro 5** (static, i18n ES/EN con routing integrado)
- **Vue 3** en islas interactivas (`client:visible`, `client:idle`)
- **Tailwind CSS** con paleta tropical vibrante personalizada
- **GSAP** para timelines del hero
- **Lenis** smooth scroll
- **Canvas 2D** para partículas reactivas al cursor
- **Vercel** para deploy

## Scripts

```bash
npm run dev       # Dev server en http://localhost:4321
npm run build     # Build producción (estático, dist/)
npm run preview   # Preview del build
```

## Estructura

```
src/
├── components/      # Hero, Bio, Music, Events, Gallery, Contact, Navbar, Footer...
├── i18n/ui.ts       # Strings ES / EN centralizados
├── layouts/         # BaseLayout con preloader, cursor, smooth scroll
├── pages/
│   ├── index.astro       # ES (default)
│   └── en/index.astro    # EN
└── styles/global.css

public/
├── logo.png
└── fotos/           # Retratos del artista
```

## Efectos WoW incluidos

- Preloader animado con logo y progreso
- Cursor custom con ring magnético y blend-mode
- Smooth scroll Lenis + anchor scroll suave
- Hero con partículas reactivas al mouse + parallax del retrato
- Animaciones GSAP escalonadas (eyebrow → títulos → sub → CTAs → portrait)
- Marquee infinito con la frase de Dennys
- Ecualizador animado en sección Música
- Tilt 3D en tarjetas de galería
- Reveal on scroll (IntersectionObserver)
- Gradientes atmosféricos animados (glow)
- Ambient noise sutil

## Cambiar idioma
El switcher ES/EN en el navbar usa enlaces nativos. La ES vive en `/`, la EN en `/en/`.

## TODO (cuando llegue la info)

- [ ] URLs reales de redes sociales (IG, SoundCloud, Mixcloud, Spotify, YouTube)
- [ ] Embeds reales de mixes
- [ ] Fechas confirmadas de eventos
- [ ] Conectar formulario de contacto (Formspree / Resend / Supabase)
- [ ] Dominio definitivo
