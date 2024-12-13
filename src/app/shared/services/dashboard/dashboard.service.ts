import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IRevenue } from '../../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private API = environment.api;

  http = inject(HttpClient);

  getRevenue(startDate: string, endDate: string) {
    return this.http.get<IRevenue>(
      `${this.API}/dashboard/revenue?start_date=${startDate}&end_date=${endDate}`
    );
  }

  
}
