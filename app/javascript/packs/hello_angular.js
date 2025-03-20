// Run this Angular example by adding the following HTML markup to your view:
//
// <hello-angular>Loading...</hello-angular>
//
// <%= javascript_pack_tag 'hello_angular' %>

// require('../hello_angular')

import "core-js/stable"
import "regenerator-runtime/runtime"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { AppModule } from "../hello_angular/app/app.module"

document.addEventListener("DOMContentLoaded", () => {
  const appRoot = document.createElement("app-root")
  document.body.appendChild(appRoot)
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err))
})

