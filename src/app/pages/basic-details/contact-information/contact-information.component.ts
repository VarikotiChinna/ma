import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent implements OnInit {

  data = {};

  constructor() {
  }

  ngOnInit() {
  }

  onSubmitButtonClick(basicInformationForm: any, fax) {
    console.log(fax.invalid);
  }

}
