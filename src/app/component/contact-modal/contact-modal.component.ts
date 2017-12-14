import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-modal.template.html'
})

export class ContactFormComponent {
  public isSubmit: boolean = false;

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private _router: Router) {

  }

  public closeModal() {
    this._router.navigate([{ outlets: { aside: null }}]);
  }

  public onSubmit() {
    this.isSubmit = !this.isSubmit;
  }
}
