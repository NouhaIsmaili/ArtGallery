import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {
  transform(productName: string, likes: number): string {
    const starsCount = Math.min(Math.floor(likes/100), 5);
    const stars = '⭐'.repeat(starsCount);
    return `${productName} ${stars}`;
  }
}
