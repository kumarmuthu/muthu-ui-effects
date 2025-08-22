function initEditorCodeBoxEffect() {
  const style = document.createElement("style");
  style.textContent = `
    .editor-container {
      width: 95%;
      max-width: 1400px;
      margin: 8px auto;
      padding: 8px;
      border-radius: 10px;
      background: white;
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      height: auto;
      overflow: visible;
    }

    .editor-output {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .code-container, .output-container {
      flex: 1 1 48%;
      display: flex;
      flex-direction: column;
      min-width: 250px;
    }

    .action-bar {
      display: flex;
      justify-content: flex-end;
      gap: 6px;
      margin-bottom: 4px;
    }

    .code-box, .output-box {
      height: 400px;
      max-height: 60vh;
      padding: 10px;
      font-size: 14px;
      border-radius: 5px;
      color: #e8e8e8;
      background: #1e1e2e;
      line-height: 1.4;
      overflow: auto;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .clear-btn {
      padding: 4px 10px;
      font-size: 11px;
    }

    .run-button-group {
      display: flex;
      justify-content: flex-start;
      gap: 6px;
      margin-bottom: 6px;
    }

    .complete-execution {
      color: #00ff88;
      text-shadow: 1px 1px 3px rgba(0, 255, 136, 0.6);
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);
}

function initNavEffect() {
  const style = document.createElement("style");
  style.textContent = `
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
    }
    header {
      background-color: #333;
      color: #fff;
      padding: 10px;
    }
    nav {
      display: flex;
      justify-content: space-around;
    }
    nav a {
      color: #FFF;
      text-decoration: none;
      padding: 15px 40px;
      border: 0;
      outline: none;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 12px;
      background-color: #333;
    }
    nav a::before {
      content: "";
      background: linear-gradient(
        45deg,
        #FF0000, #FF7300, #FFFB00, #48FF00,
        #00FFD5, #002BFF, #FF00C8, #FF0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 600%;
      z-index: -1;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      filter: blur(0px);
      animation: glowing 20s linear infinite;
      transition: opacity .3s ease-in-out;
      border-radius: 12px;
      opacity: 1;
    }
    nav a::after {
      content: "";
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #333;
      left: 0;
      top: 0;
      border-radius: 12px;
    }
    @keyframes glowing {
      0% {background-position: 0 0;}
      50% {background-position: 400% 0;}
      100% {background-position: 0 0;}
    }
    nav a:hover::before { opacity: 1; }
    nav a:hover::after { opacity: 0; }
    nav a:active { color: #000; font-weight: bold; }
    nav a:active::after { background: transparent; }

    h1 { margin-top: 30px; }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .flash-messages {
      list-style-type: none;
      padding: 10px;
      background-color: #ff9999;
      border: 1px solid #ff6666;
      border-radius: 5px;
      width: 100%;
      max-width: 600px;
      margin-bottom: 20px;
    }
    .flash-message { margin: 5px 0; padding: 5px; }
    .flash-success { color: #28a745; background-color: #d4edda; }
    .flash-error { color: #d9534f; }
  `;
  document.head.appendChild(style);
}

function initFlashMsgEffect() {
  const style = document.createElement("style");
  style.textContent = `
    .flash-messages {
      list-style-type: none;
      padding: 10px;
      background-color: #ff9999;
      border: 1px solid #ff6666;
      border-radius: 5px;
      width: 100%;
      max-width: 600px;
      margin-bottom: 20px;
    }
    .flash-message { margin: 5px 0; padding: 5px; }
    .flash-success { color: #28a745; background-color: #d4edda; }
    .flash-error { color: #d9534f; }
  `;
  document.head.appendChild(style);
}

function initFooterWatermarkEffect() {
  const style = document.createElement("style");
  style.textContent = `
    .footer {
      padding: 20px;
      text-align: center;
      background-color: #f1f1f1;
      width: 100%;
      margin-top: auto;
    }
    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer p {
      margin: 0;
      font-size: 0.9rem;
    }
    .watermark {
      font-size: 1.5rem;
      color: rgba(0, 0, 0, 0.1);
      font-weight: bold;
      margin-bottom: 10px;
      pointer-events: none;
      white-space: nowrap;
      user-select: none;
    }
  `;
  document.head.appendChild(style);
}

function initMarquee() {
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

function initUIEffects() {
    initEditorCodeBoxEffect();
    initNavEffect();
    initFlashMsgEffect();
    initFooterWatermarkEffect();
    initMarquee();
}

export { initUIEffects };
