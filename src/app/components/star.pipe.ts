import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
  standalone: true
})
export class StarPipe implements PipeTransform {
  transform(productName: string, likes: number): string {
    // Calculer le nombre d'étoiles (maximum 5 étoiles)
    const starsCount = Math.min(Math.floor(likes / 100), 5);
    // Générer les étoiles
    const stars = '⭐'.repeat(starsCount);
    // Retourner le nom du produit avec les étoiles
    return `${productName} ${stars}`;
  }
}
