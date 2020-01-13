import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsInputComponent } from './persons-input.component';

describe('PersonsInputComponent', () => {
  let component: PersonsInputComponent;
  let fixture: ComponentFixture<PersonsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
