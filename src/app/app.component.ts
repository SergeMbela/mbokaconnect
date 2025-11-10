import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="flex flex-col min-h-screen">
      <app-navbar></app-navbar>
      <main class="flex-grow"><router-outlet></router-outlet></main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'missions';
}
