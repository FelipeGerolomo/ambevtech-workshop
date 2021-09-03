import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcComponent } from './imc.component';

describe('ImcComponent', () => {
  let component: ImcComponent;
  let fixture: ComponentFixture<ImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o component', () => {
    expect(component).toBeTruthy();
  });
});
