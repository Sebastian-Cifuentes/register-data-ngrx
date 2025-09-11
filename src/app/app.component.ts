import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFacade } from './share/facades/usersFacade.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private userFacade: UserFacade
  ) {}

  ngOnInit(): void {
    this.userFacade.loadUsers();
  }
}
