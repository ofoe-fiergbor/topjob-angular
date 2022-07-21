import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AppUtilService} from "../util/app-util.service";
import {Observable} from "rxjs";
import {JobSearchResultModel} from "./jobs.model";

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient, private util: AppUtilService) {
  }

  getAllJobsPaginated(page: number, size: number): Observable<any> {
    let queryParams = new HttpParams()
      .append('page', page)
      .append('size', size)
      // .append('sort', 'role');
    return this.http.get<any>(`${this.util.BASE_URL}/v1/jobs`, {
      params: queryParams,
      headers: this.util.httpOptions.headers,
    })
  }

  searchJobsByRole(role: string) {
    return this.http
      .get<JobSearchResultModel>(`${this.util.BASE_URL}/v1/jobs/search?role=${role}`,
      this.util.httpOptions)
  }
}
