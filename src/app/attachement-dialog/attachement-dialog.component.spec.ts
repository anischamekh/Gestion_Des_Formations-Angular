import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachementDialogComponent } from './attachement-dialog.component';

describe('AttachementDialogComponent', () => {
  let component: AttachementDialogComponent;
  let fixture: ComponentFixture<AttachementDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachementDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
