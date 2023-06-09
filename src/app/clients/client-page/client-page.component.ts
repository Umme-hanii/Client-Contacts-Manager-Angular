import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {
  clientList: any[] = []

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((res: any[]) => {
      this.clientList = res
    })
  }

  saveClient(clientDetails: Client) {
    this.clientService.save(clientDetails).subscribe(client => {
      this.clientList.push(client)
      console.log(this.clientList)
      this.router.navigateByUrl('/clients/search')
    })
  }
}
