import { Component } from "@angular/core"

@Component({
  selector: "app-root",
  standalone: false,
  template: `
    <div class="bg-white shadow rounded-lg p-6 max-w-md mx-auto my-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ title }}</h1>
      <p class="text-gray-600 mb-4">This is an Angular component rendered within Rails 7!</p>
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500">Counter: {{ counter }}</span>
        <button 
          (click)="incrementCounter()" 
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = "Hello from Angular!"
  counter = 0
  
  constructor(){
    console.log("Hello from Angular!")
  }

  incrementCounter() {
    this.counter++
  }
}

