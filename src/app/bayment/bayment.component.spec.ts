import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaymentComponent } from './bayment.component';

describe('BaymentComponent', () => {
  let component: BaymentComponent;
  let fixture: ComponentFixture<BaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
