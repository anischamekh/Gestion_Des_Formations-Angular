import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurHeaderComponent } from './formateur-header.component';

describe('FormateurHeaderComponent', () => {
  let component: FormateurHeaderComponent;
  let fixture: ComponentFixture<FormateurHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
