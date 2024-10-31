import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent implements OnInit {

  personas: Persona[] = [
    {nombre: 'Juan', edad: 27},
    {nombre: 'Pedro', edad: 25},
    {nombre: 'Maria', edad: 24},
    {nombre: 'Jose', edad: 23},
  ]

  constructor () {}

  ngOnInit(): void {

  }

}
