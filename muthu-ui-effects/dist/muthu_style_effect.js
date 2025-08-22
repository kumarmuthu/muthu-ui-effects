import { initEditorCodeBoxEffect } from '../src/editor-style.js';
import { initNavEffect } from '../src/nav-effect.js';
import { initFlashMsgEffect } from '../src/flash-msg-effect.js';
import { initFooterWatermarkEffect } from '../src/footer-watermark-effect.js';
import { initMarquee } from '../src/marquee-effect.js';


export function initUIEffects() {
    initEditorCodeBoxEffect();
    initNavEffect();
    initFlashMsgEffect();
    initFooterWatermarkEffect();
    initMarquee();
}
