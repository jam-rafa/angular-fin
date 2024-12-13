import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICheckLogin, ILogin, ILoginPayload } from '../../models/auth/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API = environment.api;

  http = inject(HttpClient);

  makeLogin(loginData: ILogin): Observable<ILoginPayload> {
    return this.http.post<ILoginPayload>(`${this.API}/login`, loginData);
  }

  checkLogin(): Observable<ICheckLogin> {
    return this.http.get<ICheckLogin>(`${this.API}/login`);
  }

  logout() {}
}
