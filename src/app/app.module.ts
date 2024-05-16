import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FocusComponent } from './focus/focus.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BannerComponent } from './banner/banner.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import { FooterComponent } from './footer/footer.component';
// import { VisibleDirective } from './how-it-works/visible.directive'; // adjust the path as necessary

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FocusComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BannerComponent,
    HowItWorksComponent,
    PortfolioModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
