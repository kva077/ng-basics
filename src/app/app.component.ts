import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  form!: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      tel: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(79999999999),
      ]),
      sub: new FormControl('',[
        Validators.required,
      ]),
      message: new FormControl('',[
        Validators.required,
      ]),
      captcha: new FormControl('',[
        Validators.required,
        Validators.pattern('21'),
      ]),
    })
  }

  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form)
      const formData = {...this.form.value}

      console.log('Form Data:', formData)

      this.form.reset()
    }
  }
}

