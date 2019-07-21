import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { SectionComponent } from './section/section.component';
import { TestimonalComponent } from './testimonal/testimonal.component';
import { BannerBelowComponent } from './banner-below/banner-below.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BannerComponent,
    CardComponent,
    SectionComponent,
    TestimonalComponent,
    BannerBelowComponent,
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
