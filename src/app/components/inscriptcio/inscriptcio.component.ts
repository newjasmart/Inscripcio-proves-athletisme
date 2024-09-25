import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscriptcio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscriptcio.component.html',
  styleUrls: ['./inscriptcio.component.css']
})
export class InscriptcioComponent {

  DNI!:string;
  Codidefederat!:string;
  Nomicognoms!:string;
  Telefon!:string;
  Email!:string;

}
