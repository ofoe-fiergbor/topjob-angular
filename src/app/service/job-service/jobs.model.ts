export interface JobModel {
  role: string;
  recruiter: string;
  description: string;
  url: string;
  location: string;
  imageUrl: string;
}

export interface JobSearchResultModel {
  jobs: JobModel[]
}
