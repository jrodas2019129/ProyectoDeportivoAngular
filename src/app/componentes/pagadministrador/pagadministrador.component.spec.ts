import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadministradorComponent } from './pagadministrador.component';

describe('PagadministradorComponent', () => {
  let component: PagadministradorComponent;
  let fixture: ComponentFixture<PagadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagadministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
