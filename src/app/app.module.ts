import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import {LoggerService} from './logger.service';
import { TitleChildComponent } from './title/title-child/title-child.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GithubComponent,
    HomeComponent,
    TitleComponent,
    FooterComponent,
    TitleChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
