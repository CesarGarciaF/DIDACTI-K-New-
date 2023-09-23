import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberesComponent } from './saberes.component';

describe('SaberesComponent', () => {
  let component: SaberesComponent;
  let fixture: ComponentFixture<SaberesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaberesComponent]
    });
    fixture = TestBed.createComponent(SaberesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
