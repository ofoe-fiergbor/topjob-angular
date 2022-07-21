import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {JobService} from "../../service/job-service/job.service";
import {JobModel} from "../../service/job-service/jobs.model";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  length = 100;
  pageSize = 15;
  roleSearch = ""
  searchResult: JobModel[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  jobs: JobModel[] = []

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.fetchJobsPaginated(0, 10)
  }

  formGroup = new FormGroup({
    role: new FormControl("")
  })

  onSubmit() {
    const role = this.formGroup.value.role;
    this.roleSearch = role;
    this.searchForJobs(role)
    this.formGroup.reset();
  }

  trackPageEvent(event: PageEvent) {
    this.fetchJobsPaginated(
      event.pageIndex,
      event.pageSize
    );
  }

  fetchJobsPaginated(page: number, size: number) {
    this.jobService.getAllJobsPaginated(page, size)
      .subscribe(response => {
        this.pageSize = response.size;
        this.length = response.totalElements;
        this.jobs = response.content;
      })
  }

  clearSearch() {
    this.roleSearch = "";
    this.searchResult = []
  }

  searchForJobs(role: string) {
    return this.jobService.searchJobsByRole(role)
      .subscribe(response => this.searchResult = response.jobs)
  }

  openLink(link: string) {
    window.open(link)
  }
}
