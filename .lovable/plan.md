# Kill the AI slop, rebuild with conviction

You're right — the current site hits almost every tell on that list: cyan-on-dark, glassmorphism everywhere, gradient text on every heading, glowing cards, lucide icons in rounded squares above every section title, redundant Spanish copy, nested cards, the "big number / small label / gradient accent" stat row in the hero. It reads as a template, not a brand.

Here's the direction I want to take. One opinionated aesthetic, executed everywhere — no half measures.

## New aesthetic: editorial brutalism, warm

Think *Linear's docs meets a printed annual report* — not another dark-SaaS clone.

- **Palette**: ditch zinc-950 + cyan. Move to **bone (#F2EFE9) background, ink (#0E0E0C) foreground**, a single **vermilion accent (#E2492B)** used sparingly (1–2 spots per viewport max). Optional muted slate for secondary text. No gradients anywhere.
- **Type**: drop Space Grotesk + Inter. Pair **Instrument Serif** (display, large, italicized for emphasis) with **Söhne / IBM Plex Sans** for body. Real hierarchy through size + weight + leading, not color tricks.
- **Layout**: asymmetric, generous left-aligned compositions. 12-col grid actually used (offsets, hangs). No more centered hero with three stat cards underneath.
- **No glassmorphism, no glow, no shadow-glow, no backdrop-blur, no gradient-text, no neon grids, no floating orbs.** Borders are 1px hairlines or none. Radius drops from 0.875rem to 2px (or 0 for primary surfaces).
- **No icon-in-rounded-square above every heading.** Section labels are small uppercase numerals ("01 — Problema") instead.
- **Cards become sections.** Most "cards" become bordered rows or just typographic blocks separated by hairlines. Real card use only where genuinely card-like (pricing tiers, testimonials).

## Concrete changes

### 1. Design tokens (`index.css`, `tailwind.config.ts`)
- Replace all HSL tokens: bone bg, ink fg, vermilion primary, warm-stone muted.
- Delete `--gradient-primary`, `--gradient-hero`, `--gradient-glow`, `--shadow-glow*`, `.glass-card`, `.glass-nav`, `.gradient-text`, `.gradient-bg`, `.neon-grid-3d`, `.orb-3d`, `.scanline`, `.bg-grid`, `animate-float-3d`, `animate-pulse-glow`, `animate-shimmer`.
- Swap Google Fonts in `index.html` to Instrument Serif + IBM Plex Sans.
- Set base radius to `2px`.

### 2. Hero (`Hero.tsx`)
- Kill the video background (it's part of the slop too — generic "AI" footage). Replace with a **massive serif headline left-aligned**, the kicker as a single italic line, one vermilion CTA + one text link. No three-stat card row. No badge with pinging dot.
- Single column on left, generous whitespace on right (or a single restrained editorial element — a numbered table of contents of the page).

### 3. Section pattern (applies to Problem, Assistant, Multichannel, VoiceBot, ROI, Differentiation, Industries, etc.)
- Remove `glass-card depth-card`, `shadow-glow`, gradient backgrounds, icon-in-rounded-square pattern.
- Section header becomes: `01 — PROBLEMA` (small caps, ink/60) + serif H2 left-aligned.
- ROI cards lose the gradient bg + glow on the "QS" side; become two columns separated by a hairline rule, price set in serif italic.

### 4. Founders
- Lose the cards. Two large duotone-treated portraits with names in serif beside them, role in small caps below. LinkedIn as a plain underlined link, not a button.

### 5. Pricing
- Single column of tiers as horizontal rows with hairline separators — not three glowing cards. Recommended tier marked with a single vermilion bar on the left edge.

### 6. Copy pass (Japanese-UX-writing fix)
- Cut redundancy in Spanish & English translations: e.g. "Nunca pierdas un cliente más. Tu negocio responde 24/7 con IA." + "Responde automáticamente en WhatsApp..." + "Más clientes atendidos, más citas agendadas, más ventas cerradas" → collapse into one sharp headline + one supporting line. Apply same edit across every section subhead.

### 7. Header / Footer
- Remove `glass-nav` blur. Plain bone bg with hairline bottom border. Logo in serif italic, nav in small caps.

### 8. Animations
- Remove `animate-float-3d`, `animate-spin-slow`, `animate-scan`, `animate-grid-drift`, `pulse-glow`, `shimmer`, the LogoCube spin, the perspective rotateX hero entry.
- Keep only: a single subtle fade+rise on section entry (200ms, ease-out, 8px). That's it.

### 9. Misc cleanup
- Delete `Spline3D.tsx`, `Tilt3D.tsx`, `LogoCube.tsx` 3D logo (replace with serif wordmark).
- Delete `hero-bg.mp4` import.
- Remove `WhatsAppButton` floating-bubble styling — make it a discreet bottom-right text link with a thin border, not a pulsing green circle.

## What I'm NOT changing
- Bilingual ES/EN system, IP detection, translation keys structure.
- Routing, Founders photos, Supabase wiring, edge functions, payments, contact strategy.
- Section order on the page.

## Risk / scope
This touches ~20 files. It will look dramatically different on first load — that's the point. If you'd rather I prototype it on **one section first** (say the Hero) so you can react before I rip out the whole system, say "Hero first" and I'll do that instead.

Otherwise, reply **go** and I'll execute the full pass.