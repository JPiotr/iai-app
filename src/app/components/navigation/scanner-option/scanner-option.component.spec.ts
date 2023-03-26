import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerOptionComponent } from './scanner-option.component';

describe('ScannerOptionComponent', () => {
  let component: ScannerOptionComponent;
  let fixture: ComponentFixture<ScannerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScannerOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScannerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
