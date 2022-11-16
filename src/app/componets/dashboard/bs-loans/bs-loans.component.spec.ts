import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsLoansComponent } from './bs-loans.component';

describe('BsLoansComponent', () => {
  let component: BsLoansComponent;
  let fixture: ComponentFixture<BsLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
