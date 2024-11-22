import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffinChristianComponent } from './raffin-christian.component';

describe('RaffinChristianComponent', () => {
  let component: RaffinChristianComponent;
  let fixture: ComponentFixture<RaffinChristianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaffinChristianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaffinChristianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
