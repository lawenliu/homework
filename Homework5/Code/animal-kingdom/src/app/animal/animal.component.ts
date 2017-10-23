import {
  Component,
  Input,
  HostBinding
} from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'animal',
  templateUrl: './animal.component.html'
})
export class AnimalComponent {
  @Input() animalData: Animal;
  @HostBinding('attr.class') cssClass = "item";

  constructor() { }
}
