import { Injectable } from '@angular/core';
import { Pyramid } from '../pyramid.model';
import { PyramidRow } from '../pyramid-row.model';
import { Animal } from '../animal.model';

@Injectable()
export class PyramidService {
  pyramid: Pyramid;

  generatePyramid() {
    
    this.pyramid = new Pyramid([
      new PyramidRow(1, [
        new Animal(
          'shark',
          1,
          'marine animal',
          '/assets/images/animals/shark.jpg'
        ),
        new Animal(
          'eagle',
          1,
          'bird',
          '/assets/images/animals/eagle.jpg'
        ),
        new Animal(
          'lion',
          1,
          'reptile',
          '/assets/images/animals/lion.jpg'
        )
      ]),
      new PyramidRow(2, [
        new Animal(
          'tuna',
          2,
          'marine animal',
          '/assets/images/animals/tuna.jpg'
        ),
        new Animal(
          'weasel',
          2,
          'reptile',
          '/assets/images/animals/weasel.jpg'
        ),
        new Animal(
          'wolf',
          2,
          'reptile',
          '/assets/images/animals/wolf.jpg'
        )
      ]),
      new PyramidRow(3, [
        new Animal(
          'mackarel',
          3,
          'marine animal',
          '/assets/images/animals/mackarel.jpg'
        ),
        new Animal(
          'snake',
          3,
          'reptile',
          '/assets/images/animals/snake.jpg'
        ),
        new Animal(
          'cat',
          3,
          'reptile',
          '/assets/images/animals/cat.jpg'
        )
      ]),
      new PyramidRow(4, [
        new Animal(
          'zooplankton',
          4,
          'marine animal',
          '/assets/images/animals/zooplankton.jpg'
        ),
        new Animal(
          'goat',
          4,
          'reptile',
          '/assets/images/animals/goat.jpg'
        ),
        new Animal(
          'mouse',
          4,
          'reptile',
          '/assets/images/animals/mouse.jpg'
        )
      ]),
      new PyramidRow(5, [
        new Animal(
          'algae',
          5,
          'marine plant',
          '/assets/images/animals/algae.jpg'
        ),
        new Animal(
          'grass',
          5,
          'plant',
          '/assets/images/animals/grass.jpg'
        ),
        new Animal(
          'rice',
          5,
          'plant food',
          '/assets/images/animals/rice.jpg'
        )
      ])
    ]);
  }

  getPyramid(): Pyramid {
    return this.pyramid;
  }
}
