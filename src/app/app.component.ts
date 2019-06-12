import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = true;
  // tslint:disable-next-line:typedef-whitespace
  ifShow : boolean = true;
  title = 'CSA Weather Application';
  toggleSideBar(): void {
    this.display = !this.display;
  }
}
