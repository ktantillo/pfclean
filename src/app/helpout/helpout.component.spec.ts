import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpoutComponent } from './helpout.component';

describe('HelpoutComponent', () => {
  let component: HelpoutComponent;
  let fixture: ComponentFixture<HelpoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
