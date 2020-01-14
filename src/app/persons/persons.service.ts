import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor() { }

  persons: string[] = ['Max', 'Manuel', 'Anna'];

  addPerson(name: string) {
    this.persons.push(name);
    console.log(this.persons);
  }
}
