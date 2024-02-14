import { Component } from '@angular/core';
import { UserComponent } from '../../../Angular-Concept/angular-concept/src/app/user/user.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  city = 'new york';
}
