import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/home/Components/navbar/navbar.component';
import { HeroComponent } from './Components/home/Components/hero/hero.component';
import { FooterComponent } from './Components/home/Components/footer/footer.component';
import { FormComponent } from './Components/form/form.component';
import { PreFormComponent } from './Components/form/Components/pre-form/pre-form.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        HeroComponent,
        FooterComponent,
        FormComponent,
        PreFormComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule,
        FormsModule
    ]
})
export class AppModule { }
