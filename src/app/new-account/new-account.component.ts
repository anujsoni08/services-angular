import { Component } from "@angular/core";

import { LoggingService } from "../services/logging.service";
import { AccountsService } from "../services/accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService],
})
export class NewAccountComponent {
  constructor(
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe((status: string) => {
      alert("new Status: " + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
