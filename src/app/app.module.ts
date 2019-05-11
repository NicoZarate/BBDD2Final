import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http'
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatChipsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { AppRoutingModule } from './app-routing.module';
import { ApprovalRuleService } from './approval-rule.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CreateComponent,
    ViewComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatChipsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [MatDatepickerModule,ApprovalRuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
