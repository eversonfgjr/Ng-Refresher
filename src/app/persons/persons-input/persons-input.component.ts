import { Component } from '@angular/core';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent {

  onCreatePerson(personName: string) {
    console.log('Person created: ' + personName);
  }

}
