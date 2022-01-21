import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathServiceService {

  public pow(x: number, y: number): number {
    return Math.pow(x, y);
  }

}
