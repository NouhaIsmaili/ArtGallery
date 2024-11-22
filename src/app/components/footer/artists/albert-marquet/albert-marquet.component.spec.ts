import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertMarquetComponent } from './albert-marquet.component';

describe('AlbertMarquetComponent', () => {
  let component: AlbertMarquetComponent;
  let fixture: ComponentFixture<AlbertMarquetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbertMarquetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbertMarquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
