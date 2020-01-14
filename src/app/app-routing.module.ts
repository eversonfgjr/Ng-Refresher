import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonsInputComponent } from './persons/persons-input/persons-input.component';

const routes: Routes = [
  { path: '', component: PersonsComponent  },
  { path: 'input', component: PersonsInputComponent  },
]

@NgModule({

})
export class AppRoutingModule {

}
