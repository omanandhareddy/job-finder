import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  private apiUrl = 'https://jobfile.onrender.com';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/jobs1`);
  }

  addJob(job: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/jobs1`, job);
  }

  updateJob(job: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/jobs1/${job.id}`, job);
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/jobs1/${id}`);
  }

  getJobById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/jobs1/${id}`);
  }

  getApplications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/applications1`);
  }

  addApplication(app: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/applications1`, app);
  }

  updateApplication(app: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/applications1/${app.id}`, app);
  }
}
