import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProdListeComponent } from './category-prod-liste.component';

describe('CategoryProdListeComponent', () => {
  let component: CategoryProdListeComponent;
  let fixture: ComponentFixture<CategoryProdListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryProdListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProdListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
