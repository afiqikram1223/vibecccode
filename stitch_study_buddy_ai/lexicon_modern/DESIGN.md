---
name: Lexicon Modern
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#5a413d'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#8e706c'
  outline-variant: '#e2bfb9'
  surface-tint: '#b22b1d'
  primary: '#570000'
  on-primary: '#ffffff'
  primary-container: '#800000'
  on-primary-container: '#ff8371'
  inverse-primary: '#ffb4a8'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#8f0f07'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  bento-gap: 12px
---

## Brand & Style

The design system marries the archival heritage of "Dark Academia" with the clinical precision of ultra-modern minimalism. It is designed for a university utility environment where clarity is paramount, but a sense of intellectual prestige is desired.

The aesthetic is defined by a "Digital Parchment" philosophy: utilizing a soft, tactile light cream base contrasted with sharp, hairline-thin 1px borders and deep maroon accents. It employs a Bento-grid layout to organize complex information into digestible, beautiful modules. Glassmorphism is used sparingly to represent modern "layers" of digital intelligence, while subtle glows highlight AI-augmented features.

## Colors

The palette is rooted in a scholarly tradition but executed with modern digital constraints.

- **Primary (UTM Maroon):** Used for primary actions, progress indicators, and active states. It provides a high-contrast focal point against the cream background.
- **Secondary (Ink):** A near-black slate used for high-level typography and structural elements.
- **Neutral (Parchment):** The #FCFBF7 background reduces eye strain compared to pure white, providing a warm, sophisticated canvas.
- **Surface Tiers:** Use a slightly darker "Paper" tint (#F2F0E9) for container backgrounds to create subtle distinction within the grid.
- **AI Accent:** A soft, ethereal lavender-blue glow (#E0E7FF) is reserved exclusively for AI-driven insights and features.

## Typography

This design system utilizes a dual-font strategy to balance heritage and utility.

- **Geist** handles the heavy lifting. Its mono-spaced influences and high legibility make it ideal for data-heavy university utilities, schedules, and administrative tasks.
- **Newsreader** is used sparingly for large display titles and "editorial" moments, injecting the Dark Academia spirit into the UI.
- **Hierarchy:** Use `label-caps` for section headers within Bento cards to maintain a structured, almost architectural feel.

## Layout & Spacing

The layout is governed by a strict Bento-grid system. All containers should align to a 12-column grid on desktop and a 4-column grid on mobile.

- **Bento Modules:** Content is housed in discrete modules with a fixed 12px gap.
- **Whitespace:** Use ample padding (24px to 32px) within cards to maintain a sense of "Minimalist" breathing room.
- **Reflow:** On mobile, bento cells stack vertically, with secondary utility cards shrinking to half-width icons or collapsed states to preserve the primary functional view.

## Elevation & Depth

Depth is achieved through material layering rather than heavy shadows.

- **Glassmorphism:** Overlays and floating panels (like modals or navigation bars) use a 20px backdrop blur with a 40% white tint and a 1px solid white border at 20% opacity.
- **Borders:** All primary containers use a 1px solid border (#E5E2D9).
- **Active State Glow:** Instead of a drop shadow, active AI elements or primary buttons may emit a soft, 8px diffusion glow of their own color.
- **Shadows:** Only use shadows for "high-elevation" items like dropdown menus, using a very soft, diffused ink-colored shadow (0px 10px 30px rgba(28, 28, 28, 0.05)).

## Shapes

The shape language is "Soft-Geometric." 

- **Containers:** All bento cards, buttons, and input fields utilize a 16px (1rem) corner radius.
- **Inner Elements:** Nested elements (like images or sub-chips) should use a slightly smaller radius (8px) to maintain nested visual harmony.
- **Interaction:** Buttons expand slightly (1.02x) on hover, emphasizing the "tactile" nature of the modern interface.

## Components

- **Buttons:** Primary buttons are solid UTM Maroon with white Geist text. Secondary buttons are "Ghost" style: 1px Maroon border with Maroon text.
- **Bento Cards:** The foundational unit. Background is either #FFFFFF (Pure White) for emphasis or a glassmorphic blur for secondary info.
- **Input Fields:** Minimalist design with only a bottom border that transforms into a full 1px box outline on focus.
- **Chips:** Small, 16px rounded pill shapes with a light maroon tint (5% opacity) and maroon text for status indicators.
- **Progress Bars:** Thin, 4px height tracks in neutral #E5E2D9 with a solid Maroon fill.
- **AI Interface:** Identified by a gradient border (Maroon to Lavender-Blue) and a subtle "breathing" animation.