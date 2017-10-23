import {
  Component,
  Input
} from '@angular/core';
import { Pyramid } from '../pyramid.model';


@Component({
  selector: 'pyramid',
  templateUrl: './pyramid.component.html'
})
export class PyramidComponent {
  @Input() pyramidData: Pyramid;
  constructor() { }
}
