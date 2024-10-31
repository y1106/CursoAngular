import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }

  numero: number = 1;

  decrementar() {
    this.numero--;
  }

  incrementar() {
    this.numero += 1;
  }

}
