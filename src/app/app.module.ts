import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LocalTaskService } from "./services/local-task.service";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule, MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from ".//app-routing.module";
import { NewTaskComponent } from "./pages/new-task.component";
import { EditTaskComponent } from "./pages/edit-task.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./pages/home.component";
import { IsDonePipe } from "./pipes/is-done.pipe";

import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireModule} from 'angularfire2';
import {FirebaseTaskService} from './services/firebase-task.service';

const firebaseConfig = {
  apiKey: "AIzaSyAb-QD_jDPPA4mM0a8L_i7dp2sLbuz_YBI",
  authDomain: "tasklist-5af1a.firebaseapp.com",
  databaseURL: "https://tasklist-5af1a.firebaseio.com",
  projectId: "tasklist-5af1a",
  storageBucket: "tasklist-5af1a.appspot.com",
  messagingSenderId: "381283576421"
};

@NgModule({
  declarations: [
    AppComponent,
    NewTaskComponent,
    EditTaskComponent,
    HomeComponent,
    IsDonePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    AppRoutingModule
  ],
  providers: [LocalTaskService, FirebaseTaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
