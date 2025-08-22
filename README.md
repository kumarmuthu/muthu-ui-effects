# muthu-ui-effects

A lightweight JavaScript library for adding dynamic UI effects to your web projects

---

# Muthu UI Effects

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue)](#)


A lightweight JavaScript library for adding dynamic UI effects to your web projects, including:

- Glowing navigation buttons
- Marquee with rainbow blinking text
- Flash message notifications
- Footer watermark
- Optional editor/code box styles

This project demonstrates how to structure modular JS effects in `src/` and build a bundled, ready-to-use file in `dist/`.

## Installation

You can install via **npm**:

```bash
npm install muthu-ui-effects
```

## Uninstallation

```bash
npm uninstall muthu-ui-effects
```

---

## Repo Structure

```

muthu-ui-effects/
├── README.md
├── dist/
│   └── muthu_style_effect.js   # Combined effects for browser usage
├── examples/
│   └── index.html              # Demo page using the effects
└── src/
├── editor-style.js
├── flash-msg-effect.js
├── footer-watermark-effect.js
├── marquee-effect.js
└── nav-effect.js

````

---

## Usage

You can include the effects in your project directly from your local `dist/` file or via a CDN if published.

**Local:**

```html
<script type="module">
  import { initUIEffects } from './dist/muthu_style_effect.js';
  initUIEffects();
</script>
````

---

## Usage

### HTML Example

```html
<div class="container">
  <div class="marquee">
    <h1 class="scroll">UI Effects Project: Dynamic Navigation & Marquee Demo</h1>
  </div>
  <div class="marquee">
    <h2 class="rainbow scroll">Check out glowing nav links, flash messages, and footer watermark!</h2>
  </div>
</div>

<div class="flash-messages">
  <div class="flash-message flash-success">This is a success message</div>
  <div class="flash-message flash-error">This is an error message</div>
</div>

<footer class="footer">
  <div class="footer-content">
    <p>UI Effects Demo Footer</p>
    <div class="watermark">muthu-ui-effects</div>
  </div>
</footer>
```

**JavaScript Initialization:**

```js
import { initUIEffects } from './dist/muthu_style_effect.js';
initUIEffects();
```

---

## Development

1. Make changes in the `src/` folder (modular JS files).
2. Combine them into `dist/muthu_style_effect.js` manually or using a bundler (e.g., Rollup/Webpack).
3. Test with the `examples/index.html` page.

---

## License

MIT License © 2025 [Muhtukumar S]

