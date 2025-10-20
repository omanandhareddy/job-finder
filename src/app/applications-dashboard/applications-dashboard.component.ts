import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobServiceService } from '../job-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications-dashboard',
  imports: [CommonModule,FormsModule],
  templateUrl: './applications-dashboard.component.html',
  styleUrl: './applications-dashboard.component.css'
})
export class ApplicationsDashboardComponent {
  applications: any[] = [];

  constructor(private svc: JobServiceService,private router:Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getApplications().subscribe(res => this.applications = res);
  }

  updateStatus(app: any) {
    this.svc.updateApplication(app).subscribe(() => alert('Status updated!'));
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
