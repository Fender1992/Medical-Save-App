import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface resPayload {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
}

@Injectable({ providedIn: 'root' })
export class UserDataService {
  dbUrl = 'https://medical-save-default-rtdb.firebaseio.com/health_data.json';

  constructor(private http: HttpClient) {}

  userData(
    age: number,
    height: number,
    weight: number,
    health: string
  ): Observable<resPayload> {
    return this.http.post<resPayload>(this.dbUrl, {
      age: age,
      health: health,
      height: height,
      weight: weight,
      token: String,
      returnSecureToken: true,
    });
  }
}
