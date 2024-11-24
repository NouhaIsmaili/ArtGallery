import { Component, inject, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { ArtTable } from '../../model/art-table';
import { ArtTableService } from '../../services/art-table.service';
import { ProductComponent } from '../product/product.component';

export interface Tile {
  src: string;
  cols: number;
  rows: number;
  categ: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductComponent, MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    images: string[] = [
      'aboutUsPhotos/logoBackground.jpg',
      'aboutUsPhotos/image1.jpeg',
      'aboutUsPhotos/image2.jpeg',
      'aboutUsPhotos/image3.jpg',
      'aboutUsPhotos/image4.jpeg',
      'aboutUsPhotos/image5.jpeg',

    ];
  
    currentIndex: number = 0;
    likedProd:ArtTable[]=[]
    sortedProducts:ArtTable[]=[]

    artTableService: ArtTableService = inject(ArtTableService)

    ngOnInit(): void {
      this.startSlider();
      this.artTableService.getProducts().subscribe(
        data => {
          this.likedProd = data;
          this.sort()
        },
      );
    }
    
    sort(){
      this.sortedProducts = this.likedProd.sort((a, b) => b.nbLikes - a.nbLikes);
      console.log(this.sortedProducts);
    }

  
    startSlider() {
       setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 1000); 
    }

    tiles: Tile[] = [  

      {categ: "Abstrait", cols: 2, rows: 1, src: 'abstrait/Baroni-Victor/imgB1.jpg'},
      {categ: "classique", cols: 1, rows: 1, src: 'classique/Caravage/imgC2.jpg'},
      {categ: "Fauve", cols: 1, rows: 1, src: 'Fauve/Albert-Marquet/imgAM1.jpeg'},
      {categ: "figuratif", cols: 2, rows: 1, src: 'figuratif/Richard-Franklin/imgF3.png'},
      {categ: "pop_art", cols: 1, rows: 1, src: 'pop-art/Novarino-Fabien/imgN2.jpg'},

    ];

    nextSlide() {
      if (this.currentIndex < this.sortedProducts.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop back to the first slide
      }
    }
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.sortedProducts.length - 1; // Loop to last slide
      }
    }


  
  }
