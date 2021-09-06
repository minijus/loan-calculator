import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL; //Getting URL for environments.
  
  create(payload: any)
  {
    console.log(payload);
    let headers = new HttpHeaders({'X-API-KEY': 'swb-222222'}); //Todo: Will get api key from configuration file later.
    return this.http.post(this.apiURL, payload, { headers });

     //CORS origin, header and method should be enabled in the API to access in browser.
     //https://stackoverflow.com/questions/47853022/how-to-pass-x-api-key-in-headers-in-angular-api-request

    // const headers = new HttpHeaders()
    //   .append('X-API-KEY', 'swb-222222')
    //   .append('Content-Type', 'application/json')
    //   .append('Accept', 'application/json')
    //   .append('Access-Control-Allow-Methods', '*')
    //   .append('Access-Control-Allow-Origin', '*')
    //   .append('Access-Control-Allow-Headers', '*');
  }
}
