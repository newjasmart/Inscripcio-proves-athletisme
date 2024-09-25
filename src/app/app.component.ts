import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InscriptcioComponent } from './components/inscriptcio/inscriptcio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InscriptcioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inscripcio';
}
