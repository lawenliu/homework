import { Component } from '@angular/core';
import { Pyramid } from './pyramid.model';
import { PyramidService } from './services/pyramid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	pyramidData: Pyramid;

  constructor(private pyramidService: PyramidService) {
    this.pyramidService.generatePyramid();
    this.pyramidData = this.pyramidService.getPyramid();
    console.log(this.pyramidData);
  }
}
