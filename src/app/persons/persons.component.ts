import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit, OnDestroy {

  personList: string[];
  private personListSubs: Subscription;

  constructor(private personService: PersonsService) {
    this.personService = personService;
  }

  ngOnInit() {
    this.personList = this.personService.persons;
    this.personListSubs = this.personService.personChanged.subscribe( persons => {
      this.personList = persons;
    });
  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }
}
