import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home.component/home.component.component';
import { PostJobComponent } from './post-job/post-job.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { ApplicationsDashboardComponent } from './applications-dashboard/applications-dashboard.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'post', component: PostJobComponent },
  { path: 'manage-jobs', component: ManageJobsComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'job-details/:id', component: JobDetailsComponent },
  { path: 'apply-job/:id', component: ApplyJobComponent },
  { path: 'applied-jobs', component: AppliedJobsComponent },
  { path: 'applications-dashboard', component: ApplicationsDashboardComponent },
  { path: 'analytics', component: AnalyticsComponent },
];
