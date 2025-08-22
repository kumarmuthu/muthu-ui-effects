export function initFlashMsgEffect() {
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
