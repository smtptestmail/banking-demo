import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { DetailsTabComponent } from './components/body/details-tab/details-tab.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { ApsChargesTabComponent } from './components/body/aps-charges-tab/aps-charges-tab.component'
import { HttpClientModule} from '@angular/common/http';
import {TreeviewModule} from 'ngx-treeview';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { DisabledOnSelectorDirective } from './disabled-on-selector.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DetailsTabComponent,
    ApsChargesTabComponent,
    DisabledOnSelectorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    TreeviewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
