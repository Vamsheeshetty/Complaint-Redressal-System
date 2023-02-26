import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../complaint';
import { Feedback } from '../feedback';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createComplaint(complaint: Complaint): Observable<Complaint> {
    return this.http.post<Complaint>(`${this.baseUrl}/customer/create-complaint`, complaint);
  }

  getComplaintByUsername(username: string): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.baseUrl}/customer/get-complaint/${username}`);
  }

  findComplaintById(id: number): Observable<Complaint> {
    return this.http.get<Complaint>(`${this.baseUrl}/customer/complaint-feedback/${id}`);
  }

  saveFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.baseUrl}/customer/save-feedback`, feedback);
  }

  findUnassignedComplaints(pinCode: number): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.baseUrl}/manager/unassigned-complaint/${pinCode}`);
  }

  findAssignedComplaints(pinCode: number): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.baseUrl}/manager/assigned-complaint/${pinCode}`);
  }

  findAllComplaints(): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.baseUrl}/manager/get-complaints`);
  }

  findAllFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.baseUrl}/feedback/get-feedback`);
  }

  getManagerComplaint(id: number): Observable<Complaint> {
    return this.http.get<Complaint>(`${this.baseUrl}/manager/complaint-id/${id}`);
  }

  assignEngineer(id: number, complaint: Complaint): Observable<Complaint> {
    return this.http.put<Complaint>(`${this.baseUrl}/manager/assign-engineer/${id}`, complaint);
  }
  getEngineers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/manager/get-engineers`);
  }
  getAllComplaintsAssigned(assignedEngineer: string): Observable<Complaint[]> {
    return this.http.get<Complaint[]>(`${this.baseUrl}/engineer/get-all-complaints/${assignedEngineer}`);
  }
  updateStatus(id: number, complaint: Complaint): Observable<Complaint> {
    return this.http.put<Complaint>(`${this.baseUrl}/engineer/update-status/${id}`, complaint);
  }

}
