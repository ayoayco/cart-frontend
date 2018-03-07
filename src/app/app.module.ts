import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EmailSubscriptionComponent } from './email-subscription/email-subscription.component';
import { DonateComponent } from './donate/donate.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailSubscriptionComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
