import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenServiceService {
  private readonly TOKEN_KEY = 'authToken';

  saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | false {
    const token = localStorage.getItem(this.TOKEN_KEY);
    return token ? token : false;
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
