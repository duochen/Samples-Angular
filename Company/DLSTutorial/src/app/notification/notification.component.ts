import { Component, OnInit } from '@angular/core';


import { 
  MessageService,
  SlbMessage,
  SlbSeverity 
} from '@slb-dls/angular-material/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  providers: [MessageService]
})
export class NotificationComponent implements OnInit {
  messages = [{ severity: SlbSeverity.Success, summary: 'Success Message', detail: 'Order submitted' }];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

}
