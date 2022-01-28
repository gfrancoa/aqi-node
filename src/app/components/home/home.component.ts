import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';

import { Station } from 'src/app/model/station.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public stations: Station[] = [];

  constructor(public httpClientService: HttpClientService) {}

  ngOnInit(): void {
    this.listStations();
  }

  listStations() {
    this.httpClientService.list('bogota').subscribe({
      next: (res: any) => {
        if (res.length > 0) {
          this.stations = res;
        } else {
          console.log('no se pudo obtener datos');
        }
      },
      complete: () => {
        console.log('consulta termnanda');
      }, // completeHandler
      error: (err) => {
        console.log('Error creando user', err);
      }, // errorHandler
    });
  }
}
