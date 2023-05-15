import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.scss']
})
export class ClientDetailsPageComponent implements OnInit {
  selectedClient: Client = new Client()

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const clientID: string | null = this.route.snapshot.paramMap.get('id')
    this.clientService.getClientById(clientID).subscribe((res: Client) => {
      this.selectedClient = res
    })
  }

  deleteClientEventHandler(client: Client ): void{
    this.clientService.deleteClient(client.id).subscribe(() => {
      this.backToSearchPage()
    })
  }

  saveClientEventHandler(client: Client ): void {
    this.clientService.updateClient(client).subscribe(() => {
      this.backToSearchPage()
    })
  }

  searchClientEventHandler(client: Client ): void {
    this.backToSearchPage()
  }

  EditClientEventHandler(client: Client ): void {
    this.router.navigateByUrl('/clients/edit/' + client.id)
  }

  private backToSearchPage() {
    this.router.navigateByUrl('/clients/search')
  }
}
