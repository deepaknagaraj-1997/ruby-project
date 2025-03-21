// import './polyfills.ts';

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// document.addEventListener('DOMContentLoaded', () => {
//   platformBrowserDynamic().bootstrapModule(AppModule);
// });


import "zone.js"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "./app/app.module"

document.addEventListener("DOMContentLoaded", () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err))
})

