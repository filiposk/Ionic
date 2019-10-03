import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of New York','https://media.architecturaldigest.com/photos/5d6ffed371b0390008b9e3d3/master/pass/GettyImages-946087016.jpg', 150),
    new Place('p2', 'Osijek', 'For poor people','https://www.hotel-drava.com/images/osijek.jpg', 50),
    new Place('p3', 'Amsterdam', 'Enjoy your life','https://d3dh6of9cnaq4t.cloudfront.net/Pictures/2000x2000fit/1/9/0/6190_amsterdamcanal_757832.jpg', 100)

  ];

  get places() {
    return [...this._places];
  }


  constructor() { }
}
