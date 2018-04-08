import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TaskService } from "./services/task.service";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormField,
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
import {ActivatedRoute, RouterModule} from '@angular/router';

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
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {}
