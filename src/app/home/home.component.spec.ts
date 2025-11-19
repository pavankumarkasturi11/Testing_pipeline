import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize num1, num2, and result to 0', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.result).toBe(0);
  });

  it('should add positive numbers correctly', () => {
    component.num1 = 5;
    component.num2 = 10;
    component.addNumbers();
    expect(component.result).toBe(15);
  });

  it('should add negative numbers correctly', () => {
    component.num1 = -5;
    component.num2 = -10;
    component.addNumbers();
    expect(component.result).toBe(-15);
  });

  it('should add a positive and a negative number correctly', () => {
    component.num1 = 5;
    component.num2 = -3;
    component.addNumbers();
    expect(component.result).toBe(2);
  });

  it('should add numbers with decimals correctly', () => {
    component.num1 = 1.5;
    component.num2 = 2.5;
    component.addNumbers();
    expect(component.result).toBe(4);
  });

  it('should add zero correctly', () => {
    component.num1 = 0;
    component.num2 = 0;
    component.addNumbers();
    expect(component.result).toBe(0);
  });

});
