import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material/app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollabComponent } from './components/collab/collab.component';
import { IndexComponent } from './views/index/index.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsOverviewComponent } from './components/posts-overview/posts-overview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MiniDetailComponent } from './components/mini-detail/mini-detail.component';
import { BadgeComponent } from './components/badge/badge.component';
import { MeComponent } from './components/me/me.component';

@NgModule({
  declarations: [
    AppComponent,
    CollabComponent,
    IndexComponent,
    SolutionsComponent,
    WelcomeComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    PostsOverviewComponent,
    MiniDetailComponent,
    BadgeComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
