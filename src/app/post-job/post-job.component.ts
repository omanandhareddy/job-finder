import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobServiceService } from '../job-service.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-job',
  imports: [CommonModule, FormsModule],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css'
})
export class PostJobComponent {
job = {
  title: '',
  company: '',
  location: '',
  description: '',
  experience: '',
  salary: '',
  jobId: ''
};

  constructor(private svc: JobServiceService, private router: Router) {}

  save() {
    if (!this.job.title || !this.job.company) {
      alert('Please fill all required fields.');
      return;
    }
    this.job['jobId'] = 'JOB-' + Math.floor(1000 + Math.random() * 9000);
    this.svc.addJob(this.job).subscribe(() => {
      alert('Job posted successfully!');
      this.router.navigate(['/manage-jobs']);
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
