import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialImportsModule } from '../material-imports.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialImportsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'alex-personal-website';
}
