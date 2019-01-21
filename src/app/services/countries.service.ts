import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

    public res:any;

  constructor(private http:HttpClient) { }

  public getService():any{
    return this.http.get("https://restcountries.eu/rest/v2/all")
    
  }
 
}
