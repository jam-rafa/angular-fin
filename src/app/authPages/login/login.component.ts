import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from '../../shared/components/forms/inputs/input/input.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../shared/services/auth/login.service';
import { ILogin } from '../../shared/models/auth/login';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, MatInputModule, ReactiveFormsModule, InputComponent],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);

  form: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  submitForm() {
    this.loginService
      .makeLogin(this.form.value)
      .subscribe((res) => console.log(res));
  }
}
