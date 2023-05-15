import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent {
  editView = false

  @Input()
  client: Client = new Client;

  @Output()
  searchEvent: EventEmitter<Client> = new EventEmitter()

  @Output()
  editEvent: EventEmitter<Client> = new EventEmitter()

  @Output()
  saveEvent: EventEmitter<Client> = new EventEmitter()

  @Output()
  deleteEvent: EventEmitter<Client> = new EventEmitter()

  edit() {
    this.toggleEdit()
  }

  searchAll() {
    this.searchEvent.emit(this.client)
  }

  delete(client: Client) {
    this.deleteEvent.emit(client)
  }

  save() {
    this.saveEvent.emit(this.client)
  }

  private toggleEdit() {
    this.editView = !this.editView
  }
}
