import { Component } from '@angular/core';

@Component({
  selector: 'app-inscriptcio',
  standalone: true,
  imports: [],
  templateUrl: './inscriptcio.component.html',
  styleUrl: './inscriptcio.component.css'
})
export class InscriptcioComponent {

  DNI!:string;
  Codidelfederat!:string;
  NomiCognoms!:string;
  Telèfon!:string;
  Email!:string;

}
