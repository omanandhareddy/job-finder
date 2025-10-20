import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobServiceService } from '../job-service.service';

@Component({
  selector: 'app-apply-job',
  imports: [CommonModule,FormsModule],
  templateUrl: './apply-job.component.html',
  styleUrl: './apply-job.component.css'
})
export class ApplyJobComponent {
 jobId: number = 0;
  application = {
    candidateName: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
    appliedDate: new Date(),
    status: 'Applied'
  };

  constructor(
    private route: ActivatedRoute,
    private svc: JobServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    this.application.resume = file ? file.name : '';
  }

  submit() {
    if (!this.application.candidateName || !this.application.email) {
      alert('Please fill required fields.');
      return;
    }

    const appData = {
      ...this.application,
      jobId: this.jobId
    };

    this.svc.addApplication(appData).subscribe(() => {
      alert('Application submitted successfully!');
      this.router.navigate(['/applied-jobs']);
    });
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
