import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase'
// // for AngularFireDatabase
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireDatabase } from 'angularfire2/database';
// // for AngularFireAuth
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireAuth } from 'angularfire2/auth';



var firebaseconfig = {
    apiKey: "AIzaSyCqWIrsJnqjl9-3O2G7crnvMBFpoCIjGDI",
    authDomain: "bribgit-bae0a.firebaseapp.com",
    databaseURL: "https://bribgit-bae0a.firebaseio.com",
    projectId: "bribgit-bae0a",
    storageBucket: "bribgit-bae0a.appspot.com",
    messagingSenderId: "407772438504"
  }

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
     AngularFireModule.initializeApp(firebaseconfig),

  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
