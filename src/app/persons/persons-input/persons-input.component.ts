import { Component } from '@angular/core';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent {

  enteredPersonName = '';

  onCreatePerson() {
    console.log('Person created: ' + this.enteredPersonName);
    this.enteredPersonName = '';
  }

}
