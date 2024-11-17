import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTableOrderComponent } from './change-table-order.component';

describe('ChangeTableOrderComponent', () => {
  let component: ChangeTableOrderComponent;
  let fixture: ComponentFixture<ChangeTableOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeTableOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTableOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
