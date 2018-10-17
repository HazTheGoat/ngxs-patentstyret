import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { IContact } from '../contact.model';
import { AddContact } from '../contact.state';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  public addContact(name: string) {
    const contact: IContact = { name };
    // dispatch value to the store
    this.store.dispatch(new AddContact(contact));
  }

}
