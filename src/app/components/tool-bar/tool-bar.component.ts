import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { Category } from '../../model/category';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [MatToolbarModule,MatTabsModule,RouterLink,RouterOutlet,MatButtonModule, MatIconModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {
  category = Object.values(Category)


}
