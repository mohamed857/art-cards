import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./cards/first/first.component";
import { Card2Component } from "./cards/card2/card2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FirstComponent, Card2Component]
})
export class AppComponent {
  title = 'cards';
}
