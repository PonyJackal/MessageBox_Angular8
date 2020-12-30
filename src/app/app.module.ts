import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { ContextMenuModule } from 'ngx-contextmenu';
import {ShContextMenuModule} from 'context-menu-angular6';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

import {MatDialogModule} from "@angular/material/dialog";
import {CourseDialogComponent}  from './course-dialog/course-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ChatRoomComponent,
    CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ContextMenuModule.forRoot({
      autoFocus: true,
      useBootstrap4: true,  
    }),
    ScrollDispatchModule,
    CommonModule,
    ShContextMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]
})
export class AppModule { }
