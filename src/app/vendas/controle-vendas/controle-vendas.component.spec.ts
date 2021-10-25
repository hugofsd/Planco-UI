import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleVendasComponent } from './controle-vendas.component';

describe('ControleVendasComponent', () => {
  let component: ControleVendasComponent;
  let fixture: ComponentFixture<ControleVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
