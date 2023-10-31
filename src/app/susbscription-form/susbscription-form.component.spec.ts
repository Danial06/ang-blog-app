import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusbscriptionFormComponent } from './susbscription-form.component';

describe('SusbscriptionFormComponent', () => {
  let component: SusbscriptionFormComponent;
  let fixture: ComponentFixture<SusbscriptionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SusbscriptionFormComponent]
    });
    fixture = TestBed.createComponent(SusbscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
