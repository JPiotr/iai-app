import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotyficationComponent } from './notyfication.component';

describe('NotyficationComponent', () => {
  let component: NotyficationComponent;
  let fixture: ComponentFixture<NotyficationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotyficationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotyficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
