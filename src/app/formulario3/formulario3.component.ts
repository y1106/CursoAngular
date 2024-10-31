import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario3.component.html',
  styleUrl: './formulario3.component.css'
})
export class Formulario3Component implements OnInit{

  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email])
  })

  procesar(){
    console.log(this.formUser.value);
  }

  constructor () {

  }

  ngOnInit(): void {

  }

}
