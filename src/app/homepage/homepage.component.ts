import { Component } from '@angular/core';
import { MaterialImportsModule } from '../../material-imports.module';
import { ServiceComponent } from '../shared/components/service/service.component';
import { ContactFormComponent } from '../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-homepage',
  imports: [ServiceComponent, ContactFormComponent, MaterialImportsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})

export class HomepageComponent {

}