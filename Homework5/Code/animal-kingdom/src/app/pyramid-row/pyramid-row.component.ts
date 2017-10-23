import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { PyramidRow } from '../pyramid-row.model';
import { Animal } from '../animal.model';

@Component({
  selector: 'pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent {
  @Input() pyramidRow: PyramidRow;
  @Output() onAnimalSelected: EventEmitter<Animal>;

  private currentAnimal: Animal;

  constructor() {
  	this.onAnimalSelected = new EventEmitter();
  }

  clicked(animal: Animal): void {
  	this.currentAnimal = animal;
  	this.onAnimalSelected.emit(animal);
  }

  isSelected(animal: Animal): boolean {
  	if (!animal || !this.currentAnimal) {
  		return false;
  	}

  	return animal.name == this.currentAnimal.name;
  }
}
