import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggonsComponent } from './biggons.component';

describe('BiggonsComponent', () => {
  let component: BiggonsComponent;
  let fixture: ComponentFixture<BiggonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
