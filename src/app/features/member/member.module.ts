import { CarouselComponent } from './components/carousel/carousel.component';
import { NgModule } from '@angular/core';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { MemberComponent } from './member.component';
import { MemberRoutingModule } from './member.routing';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { ClubExperienceComponent } from './components/club-experience/club-experience.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ResortsComponent } from './components/resorts/resorts.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MembershipComponent } from './components/membership/membership.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';


@NgModule({
  imports: [CommonModule, MemberRoutingModule ],
  exports: [CarouselComponent],
  declarations: [CarouselComponent, DestinationsComponent, MemberComponent, HomeHeroComponent, ClubExperienceComponent, BenefitsComponent, ResortsComponent, PublicationsComponent, NewsletterComponent, MembershipComponent, AboutUsComponent],
  providers: [],
})
export class MemberModule { }
