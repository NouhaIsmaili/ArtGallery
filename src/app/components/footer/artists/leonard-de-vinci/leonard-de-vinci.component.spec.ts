import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeonardDeVinciComponent } from './leonard-de-vinci.component';

describe('LeonardDeVinciComponent', () => {
  let component: LeonardDeVinciComponent;
  let fixture: ComponentFixture<LeonardDeVinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeonardDeVinciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeonardDeVinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
