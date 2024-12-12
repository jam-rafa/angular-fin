import { IRevenue } from '../../shared/models/dashboard.model';
import { DashboardService } from './../../shared/services/dashboard/dashboard.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-board',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  standalone: true,
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent {
  revenue$: Observable<IRevenue | null> = new Observable<IRevenue | null>();

  dateForm: FormGroup;

  private dashboardService = inject(DashboardService);
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.dateForm = this.formBuilder.group({
      startDate: [
        moment().subtract(1, 'month').startOf('day').format('YYYY-MM-DD'),
      ],
      endDate: [moment().endOf('day').format('YYYY-MM-DD')], // Hoje
    });

    this.initializeDahboard();
  }


  

  initializeDahboard() {
    this.getRevenue();
  }

  getRevenue() {
    const { startDate, endDate } = this.dateForm.value;
    this.revenue$ = this.dashboardService.getRevenue(startDate, endDate);
  }
}
