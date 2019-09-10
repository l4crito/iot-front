import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  apiUri = 'http://192.168.2.104';
  constructor(private httpClient: HttpClient) {

  }

  getPetition(endpoint: string) {
    return this.httpClient.get(this.apiUri + endpoint);
  }
}
