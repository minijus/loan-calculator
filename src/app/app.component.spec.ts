import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA } from '@angular/core';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent        
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test: Should create the app', () => {
     expect(component).toBeTruthy();
  });   

  it(`Test: Should have as title 'Loan Calculator'`, () => {
    var expectedTitle = 'Loan Calculator';    
    expect(component.title).toEqual(expectedTitle);
  });

  it('Test: Number of Element in the Form', () => {
     var expected = 3;
     const actual = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('input');
     expect(actual.length).toEqual(expected);
   })

   //Monthly Income Tests
   it('Test: Check Initial Value of Monthly Income', () => {
    var expectedMonthlyIcome = '500000';
    const actual = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('input')[0];
    expect(actual.value).toEqual(expectedMonthlyIcome);
  })

  it('Test: Check Monthly Income Required and Minimum Value', () => {
    var expectedValue = 500000;
    const formElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('input')[0]; //Monthly Income
    expect(formElement.value).not.toBeNull();    //Required
    expect(formElement.value).toBeGreaterThanOrEqual(expectedValue); //Minimum value
  }) 

  //Requested Amount Tests
  it('Test: Check Initial Value of Requested Amount', () => {
    var expectedRequestedAmount = '20000000';
    const actual = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('input')[1]; //Requested Amount
    expect(actual.value).toEqual(expectedRequestedAmount);
  })

  it('Test: Check Requested Amount Required and Minimum Value', () => {
    var expectedValue = 20000000;
    const formElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('input')[1]; //Requested Amount
    expect(formElement.value).not.toBeNull();    //Required
    expect(formElement.value).toBeGreaterThanOrEqual(expectedValue); //Minimum value
  }) 

  //Loan Term Tests
  it('Test: Check Initial Value of Loan Term', () => {
    var expectedLoanTerm = '36';
    const actual = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('input')[2]; //Loan Term
    expect(actual.value).toEqual(expectedLoanTerm);
  })

  it('Test: Check Loan Term Required, Minimum Value and Maximum Value', () => {
    var expectedMinValue = 36;
    var expectedMaxValue = 360;
    const formElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('input')[2]; //Loan Term
    expect(formElement.value).not.toBeNull();    //Required
    expect(formElement.value).toBeGreaterThanOrEqual(expectedMinValue); //Minimum value
    expect(formElement.value).toBeLessThanOrEqual(expectedMaxValue); //Maximum value
  }) 
  
  it('Test: Check Children is Required', () => {
     var expectedValueLength = 0;
     const formElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#loanPayloadForm').querySelectorAll('mat-select')[0]; // Children
     expect(formElement.innerHTML).not.toBeNull();    //Required
     expect(formElement.innerHTML.length).toBeGreaterThan(expectedValueLength);
  })  
});
