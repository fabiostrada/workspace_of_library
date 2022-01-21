import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JodaLibComponent } from './joda-lib.component';

describe('JodaLibComponent', () => {
  let component: JodaLibComponent;
  let fixture: ComponentFixture<JodaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JodaLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JodaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
