import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ContadorComponent } from "./contador/contador.component";
import { BotonesComponent } from "./botones/botones.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { BuclesComponent } from "./bucles/bucles.component";
import { SwitchComponent } from "./switch/switch.component";
import { Formulario2Component } from "./formulario2/formulario2.component";
import { Formulario3Component } from "./formulario3/formulario3.component";
import { FormsModule } from '@angular/forms';
import { ChildrenComponent } from "./children/children.component";
import { AddMessagesComponent } from "./add-messages/add-messages.component";
import { ListMessagesComponent } from './list-messages/list-messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, ContadorComponent, BotonesComponent, FormularioComponent, BuclesComponent, SwitchComponent, Formulario2Component, Formulario3Component, ChildrenComponent, AddMessagesComponent, ListMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curso Angular';
}
