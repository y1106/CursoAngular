import { Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { BuclesComponent } from './bucles/bucles.component';
import { Formulario3Component } from './formulario3/formulario3.component';
import { CoursesComponent } from './courses/courses.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const routes: Routes = [
  {
    path: '', component: ContadorComponent
  },
  {
    path: 'about', component: BuclesComponent
  },
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: 'courses/:course', component: DetailsComponent
  },
  {
    path: 'contact', component: ContactComponent,
    children: [
      {
        path: '', component: ContactInfoComponent,
      },
      {
        path: 'details', component: ContactDetailsComponent,
      },

    ]
  }
];
