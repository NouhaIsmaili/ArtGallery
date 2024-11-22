import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
// import { HomeComponent } from './components/home/home.component';
// import { FooterComponent } from "./components/footer/footer.component";
// import { TablesComponent } from './components/tables/tables.component';
// import { ProdListComponent } from './components/prod-list/prod-list.component';
// import { EditTableComponent } from "./components/edit-table/edit-table.component";
// import { AlbertMarquetComponent } from './components/footer/artists/albert-marquet/albert-marquet.component';
// import { ConditionsComponent } from './components/footer/aide&guide/conditions/conditions.component';
// import { FaqComponent } from './components/footer/faq/faq.component';
import { OrderlistComponent } from "./components/order-list/order-list.component";
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlbertMarquetComponent } from "./components/footer/artists/albert-marquet/albert-marquet.component";
import { ProductComponent } from "./components/product/product.component";
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { AboutUsComponent } from "./components/footer/aide&guide/about-us/about-us.component";
import { EditTableComponent } from "./components/edit-table/edit-table.component";
import { TablesComponent } from "./components/tables/tables.component";
@Component({
  selector: 'app-root',
  standalone: true,
  //, TablesComponent, ProdListComponent, EditTableComponent, AlbertMarquetComponent, ConditionsComponent, PlanDeSiteComponent, FaqComponent
  imports: [RouterOutlet, ToolBarComponent, OrderlistComponent, ProdListComponent, FooterComponent, AlbertMarquetComponent, ProductComponent, CreateProductComponent, AboutUsComponent, EditTableComponent, TablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetAngular';
}
