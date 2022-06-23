import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurFormationComponent } from './formateur-formation.component';

describe('FormateurFormationComponent', () => {
  let component: FormateurFormationComponent;
  let fixture: ComponentFixture<FormateurFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
