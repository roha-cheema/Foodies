import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { EventsComponent } from './components/events/events.component';
import { ChefComponent } from './components/chef/chef.component';
import { TablebookingComponent } from './components/tablebooking/tablebooking.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    FeedbackComponent,
    EventsComponent,
    ChefComponent,
    TablebookingComponent,
    GalleryComponent,
    ContactusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
