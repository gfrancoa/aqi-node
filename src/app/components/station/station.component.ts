import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/model/station.model';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css'],
})
export class StationComponent implements OnInit {
  @Input() station!: Station;
  @Input() i!: number;

  constructor() {}

  ngOnInit(): void {}
}
