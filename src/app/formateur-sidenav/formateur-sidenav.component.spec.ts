import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurSidenavComponent } from './formateur-sidenav.component';

describe('FormateurSidenavComponent', () => {
  let component: FormateurSidenavComponent;
  let fixture: ComponentFixture<FormateurSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateurSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateurSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
