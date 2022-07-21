import {Injectable} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root',
})
export class AppUtilService{
  BASE_URL = "http://localhost:8080/api"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    }),
  };
}
