export function initFooterWatermarkEffect() {
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
