import { Component } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent {
 jobs: any[] = [];
  filteredJobs: any[] = [];
  searchTerm = '';

  constructor(private svc: JobServiceService, private router: Router) {}

  ngOnInit() {
    this.svc.getJobs().subscribe((res) => {
      this.jobs = res;
      this.filteredJobs = res;
    });
  }

  search() {
    const term = this.searchTerm.toLowerCase();
    this.filteredJobs = this.jobs.filter(j =>
      j.title.toLowerCase().includes(term)
    );
  }

  viewDetails(id: number) {
    this.router.navigate(['/job-details', id]);
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
