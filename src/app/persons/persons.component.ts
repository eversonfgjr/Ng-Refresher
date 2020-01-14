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
  isFetching = false;
  private personListSubs: Subscription;

  constructor(private personService: PersonsService) {
    this.personService = personService;
  }

  ngOnInit() {
    this.personListSubs = this.personService.personChanged.subscribe( persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.personService.fetchPersons();
    // this.personList = this.personService.persons;

  }

  ngOnDestroy() {
    this.personListSubs.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.personService.removePerson(personName);
  }
}
