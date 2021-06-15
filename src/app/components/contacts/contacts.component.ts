import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service'
import {Contact}from 'src/app/interfaces/contact'
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private contactServe:ContactsService) {
  this.contacts=this.contactServe.getAll();
  }

  ngOnInit(): void {
  }

}
