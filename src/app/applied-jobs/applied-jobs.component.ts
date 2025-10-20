import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applied-jobs',
  imports: [CommonModule],
  templateUrl: './applied-jobs.component.html',
  styleUrl: './applied-jobs.component.css'
})
export class AppliedJobsComponent {
  applications: any[] = [];

  constructor(private svc: JobServiceService,private router:Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getApplications().subscribe(res => this.applications = res);
  }
  toApplied(){
    this.router.navigate(['/applied-jobs']);
  }
  toApply(){
    this.router.navigate(['/apply-job']);
  }
  toJobs(){
    this.router.navigate(['/job-list']);
  }
  toDetails(){
    this.router.navigate(['/job-details']);
  }
  toHome(){
     this.router.navigate(['/home']);
  }
}
