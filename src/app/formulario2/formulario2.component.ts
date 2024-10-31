import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component implements OnInit {

  persona = {
    nombre: '',
    edad: ''
  };

  procesar() {
    console.log(this.persona);
  }

  constructor () {}

  ngOnInit(): void {

  }

}
