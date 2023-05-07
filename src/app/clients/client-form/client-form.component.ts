import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {
  //new FormGroup is defined here
  clientForm: FormGroup;

  //Creating new FormControls with Validation
  firstName = new FormControl('', Validators.required)
  lastName = new FormControl('', Validators.required)
  email = new FormControl('', Validators.required)
  telephone = new FormControl('')
  company = new FormControl('', Validators.required)

  //In the constructor, we create a new FormGroup and set the properties
  //of the form group to the form controls and then set it to be the client form
  //that we use in the template.
  constructor(fb: FormBuilder) {
    this.clientForm = fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      telephone: this.telephone,
      company: this.company
    })
  }

  onSave() {
    console.log(this.clientForm)
  }
}
