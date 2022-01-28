import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  readonly URL_API = this.config.getConfig().backend.url;

  constructor(private config: ConfigService, private http: HttpClient) {}

  list(city: string) {
    return this.http.get(this.URL_API + '/stations/' + city);
  }
}
