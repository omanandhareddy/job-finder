import { Component } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  imports: [],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  totalJobs = 0;
  totalApplications = 0;
  statusCount: any = { Applied: 0, Reviewed: 0, Rejected: 0 };

  constructor(private svc: JobServiceService,private router:Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getJobs().subscribe(j => this.totalJobs = j.length);
    this.svc.getApplications().subscribe(apps => {
      this.totalApplications = apps.length;
      apps.forEach(a => this.statusCount[a.status] = (this.statusCount[a.status] || 0) + 1);
    });
  }
  toPost(){
    this.router.navigate(['/post']);
  }
  toManage(){
    this.router.navigate(['/manage-jobs']);
  }
  toApplications(){
    this.router.navigate(['/applications-dashboard']);
  }
  toAnalytics(){
    this.router.navigate(['/analytics']);
  }
  toHome(){
     this.router.navigate(['/home']);
  }
}
