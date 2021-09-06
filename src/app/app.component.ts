import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Loan Calculator';
  errors: string[] = [];
  form!: FormGroup;
  
  constructor (private appService: AppService) {
   
  }
  ngOnInit(): void {  
    this.form = new FormGroup({
      monthlyIncome: new FormControl('500000',[<any>Validators.required, <any>Validators.min(500000)]), //set monthly income to verify the tests.
      requestedAmount: new FormControl('20000000',[<any>Validators.required, <any>Validators.min(20000000)]),
      loanTerm: new FormControl('36',[<any>Validators.required, <any>Validators.min(36), <any>Validators.max(360)]),
      children: new FormControl('NONE',[<any>Validators.required]),
      coapplicant: new FormControl('NONE',[<any>Validators.required])
    });
 }

  saveChanges()  {
    this.appService.create(this.form.value).subscribe((response: any) => {
      console.log(response); //Display success message either in toastr or display in html div.
    }, error => this.errors = parseWebAPIErrors(error));  //Parsing api errors and display in UI as per requirement.
  }

  ValidateMonthlyIncome() {
    const field = this.form.get('monthlyIncome');
    if (field != null && field.hasError('required')) {
      return 'Monthly income is required.';
    }
    if (field != null && field.hasError('min')) {
      return 'Minimum value is 500000';
    }
    return '';
  }

  ValidateRequestedAmount() {
    const field = this.form.get('requestedAmount');
    if (field != null && field.hasError('required')) {
      return 'Requested amount is required.';
    }
    if (field != null && field.hasError('min')) {
      return 'Minimum value is 20000000';
    }
    return '';
  }

  ValidateLoanTerm() {
    const field = this.form.get('loanTerm');
    if (field != null && field.hasError('required')) {
      return 'Term of loan repayment is required.';
    }
    if (field != null && field.hasError('min')) {
      return 'Minimum value is 36 months';
    }
    if (field != null && field.hasError('max')) {
      return 'Maximum value is 360 months';
    }
    return '';
  }

  //Get list of item from database later.
  children = [{id: 'NONE', name: 'None'}, {id: 'SINGLE', name: 'Single'},{id: 'MULTIPLE', name: 'Multiple'}];
  coapplicants = [{id: 'NONE', name: 'None'}, {id: 'SINGLE_BORROWER', name: 'Single Borrower'},{id: 'MULTIPLE_BORROWERS', name: 'Multiple Borrowers'}];
}



