import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  HasValue = false;


  onKeyUp(event: Event) {
    if ((<HTMLInputElement>event.target).value.length > 0) {
      this.HasValue = true;
    } else {
      this.HasValue = false;
    }
  }

  onClick() {
    if (this.username.length > 0) {
      this.username = '';
      this.HasValue = false;
    }
  }
}
