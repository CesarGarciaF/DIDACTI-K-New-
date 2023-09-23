import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNivelTresDosComponent } from './cursos-nivel-tres-dos.component';

describe('CursosNivelTresDosComponent', () => {
  let component: CursosNivelTresDosComponent;
  let fixture: ComponentFixture<CursosNivelTresDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosNivelTresDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosNivelTresDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
