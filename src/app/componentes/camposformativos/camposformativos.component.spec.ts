import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamposformativosComponent } from './camposformativos.component';

describe('CamposformativosComponent', () => {
  let component: CamposformativosComponent;
  let fixture: ComponentFixture<CamposformativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamposformativosComponent]
    });
    fixture = TestBed.createComponent(CamposformativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
