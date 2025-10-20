import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobServiceService } from '../job-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-details',
  imports: [CommonModule],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  job: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private svc: JobServiceService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getJobById(id).subscribe((res) => (this.job = res));
  }

  applyJob() {
    this.router.navigate(['/apply-job', this.job.id]);
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
