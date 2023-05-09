import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() title: string = ''

  constructor(private router: Router) {}

  goTo(location: string) {
    console.log(location)
    this.router.navigateByUrl(location)
  }
}
