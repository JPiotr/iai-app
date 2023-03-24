import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotyficationBarComponent } from './notyfication-bar.component';

describe('NotyficationBarComponent', () => {
  let component: NotyficationBarComponent;
  let fixture: ComponentFixture<NotyficationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotyficationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotyficationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
