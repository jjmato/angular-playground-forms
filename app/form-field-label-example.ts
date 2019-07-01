import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/** @title Form field with label */
@Component({
  selector: 'form-field-label-example',
  templateUrl: 'form-field-label-example.html',
  styleUrls: ['form-field-label-example.css'],
})
export class FormFieldLabelExample {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      test: [false, Validators.requiredTrue],
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */