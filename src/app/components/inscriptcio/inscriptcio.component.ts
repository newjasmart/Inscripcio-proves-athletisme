import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscriptcio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscriptcio.component.html',
  styleUrl: './inscriptcio.component.css'
})
export class InscriptcioComponent {

  DNI!:string;
  Codidelfederat!:string;
  NomiCognoms!:string;
  Telefon!:string;
  Email!:string;

}
