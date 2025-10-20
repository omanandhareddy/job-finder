import { Component } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-jobs',
  imports: [CommonModule,FormsModule],
  templateUrl: './manage-jobs.component.html',
  styleUrl: './manage-jobs.component.css'
})
export class ManageJobsComponent {
  jobs: any[] = [];
  editJob: any = null;

  constructor(private svc: JobServiceService, private router:Router) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getJobs().subscribe(res => this.jobs = res);
  }

  deleteJob(id: number) {
    this.svc.deleteJob(id).subscribe(() => this.load());
  }

  startEdit(job: any) {
    this.editJob = { ...job };
  }

  saveEdit() {
    this.svc.updateJob(this.editJob).subscribe(() => {
      this.editJob = null;
      this.load();
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
