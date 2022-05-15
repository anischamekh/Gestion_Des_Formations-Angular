import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurDialogComponent } from './formateur-dialog.component';

describe('FormateurDialogComponent', () => {
  let component: FormateurDialogComponent;
  let fixture: ComponentFixture<FormateurDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
