import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatrineAlexandreComponent } from './catrine-alexandre.component';

describe('CatrineAlexandreComponent', () => {
  let component: CatrineAlexandreComponent;
  let fixture: ComponentFixture<CatrineAlexandreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatrineAlexandreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatrineAlexandreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
