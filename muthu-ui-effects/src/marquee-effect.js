export function initMarquee() {
  const style = document.createElement("style");
  style.textContent = `
/* Marquee container */
    .marquee {
      overflow: hidden;
      white-space: nowrap;
      box-sizing: border-box;
    }
    .marquee .scroll {
      display: inline-block;
      white-space: nowrap;
      will-change: transform;
      animation: marquee 12s linear infinite;
    }
    @keyframes marquee {
      0%   { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }

    /* Rainbow blinking for marquee text */
    .marquee .rainbow {
      animation: marquee 12s linear infinite, rainbowBlink 1.2s steps(1, end) infinite;
      font-weight: bold;
    }
    @keyframes rainbowBlink {
      0%   { color: red; }
      16%  { color: orange; }
      33%  { color: yellow; }
      50%  { color: green; }
      66%  { color: blue; }
      83%  { color: indigo; }
      100% { color: violet; }
    }

    /* Accessibility: disable animation for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .marquee .scroll, .marquee .rainbow {
        animation: none;
      }
    }`;
  document.head.appendChild(style);
}