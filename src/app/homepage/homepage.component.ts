import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/components/navbar/navbar.component";
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MaterialImportsModule } from '../../material-imports.module';
import { ServiceComponent } from '../shared/components/service/service.component';

@Component({
  selector: 'app-homepage',
  imports: [NavbarComponent, ServiceComponent, FooterComponent, MaterialImportsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})

export class HomepageComponent {

}