import { Animal } from './animal.model';

export class PyramidRow {
  constructor(
  	public level: number,
    public animals: Animal[]) {}
}