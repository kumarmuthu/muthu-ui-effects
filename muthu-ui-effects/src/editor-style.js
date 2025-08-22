export function initEditorCodeBoxEffect() {
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
