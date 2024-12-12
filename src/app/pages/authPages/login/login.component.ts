import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../../shared/services/auth/login.service';
import { Router } from '@angular/router';
import { TokenServiceService } from '../../../shared/services/token/token-service.service';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, MatInputModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private route = inject(Router);
  private tokenService = inject(TokenServiceService);

  form: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  submitForm() {
    this.loginService.makeLogin(this.form.value).subscribe((res) => {
      if (res.token) {
        this.tokenService.saveToken(res.token);
        this.route.navigate(['/app/dashboard']);
        return;
      }
    });
  }
}
