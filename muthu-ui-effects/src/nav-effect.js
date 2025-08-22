export function initNavEffect() {
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
