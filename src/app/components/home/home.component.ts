import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    images: string[] = [
      'aboutUsPhotos/image1.jpeg',
      'aboutUsPhotos/image2.jpeg',
      'aboutUsPhotos/image3.jpg',
      'aboutUsPhotos/image4.jpeg',
      'aboutUsPhotos/image5.jpeg',

    ];
  
    // Index de l'image courante
    currentIndex: number = 0;
  
    
  
    constructor() { }
  
    ngOnInit(): void {
      // Lancer le changement d'images toutes les 2 secondes
      this.startSlider();
    }
  
   
  
    // Fonction pour démarrer le changement d'images
    startSlider() {
       setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 2000); // 2000 ms = 2 secondes
    }
  }
  

