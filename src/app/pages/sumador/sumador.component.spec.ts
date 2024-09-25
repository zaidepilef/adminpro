import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumadorComponent } from './sumador.component';

describe('SumadorComponent', () => {
  let component: SumadorComponent;
  let fixture: ComponentFixture<SumadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SumadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
