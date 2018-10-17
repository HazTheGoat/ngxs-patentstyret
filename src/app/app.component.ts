import { ContactState } from './contact.state';
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { IContact } from './contact.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxs';
  @Select(ContactState) public contacts: Observable<IContact[]>;

  constructor(private store: Store) { }
}
