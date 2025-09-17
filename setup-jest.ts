import 'jest-preset-angular/setup-jest';
import { ɵSharedStylesHost as DomSharedStylesHost } from '@angular/platform-browser';

// Prevent Angular from actually injecting global styles into JSDOM
beforeAll(() => {
  const originalAddStyles = DomSharedStylesHost.prototype.addStyles;
  DomSharedStylesHost.prototype.addStyles = function (styles: string[]) {
    const filtered = styles.filter(s => !s.includes('@layer primeng'));
    return originalAddStyles.call(this, filtered);
  };
});