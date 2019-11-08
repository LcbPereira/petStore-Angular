import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetProxyService } from '../pet-proxy.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  pets:Pet[] = [];

  constructor(private _petProxy: PetProxyService) { }

  ngOnInit() {
    /*this.pets.push(new Pet({
      id: 1234,
      name: 'Panpuças',
      price: 120.50,
      race: 'Beagle'
    }));
    this.pets.push(new Pet({
      id: 1235,
      name: 'Dentadas',
      price: 100.50,
      race: 'Chihuahua'
    }));
    this.pets.push(new Pet({
      id: 1234,
      name: 'Snoope',
      price: 90.00,
      race: 'Dalmata'
    }));*/
    this._petProxy.getPets().subscribe((pets:Pet[]) => {
      this.pets = pets;
    })
  }

}
