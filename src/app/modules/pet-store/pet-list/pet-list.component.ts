import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  dog:Pet = new Pet({
    id: 1234,
    name: 'Panpuças',
    price: 120.5,
    race: 'Beagle'
  });

  constructor() { }

  ngOnInit() {
  }

}
