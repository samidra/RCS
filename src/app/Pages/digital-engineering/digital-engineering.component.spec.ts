import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalEngineeringComponent } from './digital-engineering.component';

describe('DigitalEngineeringComponent', () => {
  let component: DigitalEngineeringComponent;
  let fixture: ComponentFixture<DigitalEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
