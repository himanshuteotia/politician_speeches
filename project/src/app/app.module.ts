import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { CreateSpeechComponent } from './create-speech/create-speech.component';
import { HomeComponent } from './home/home.component';
import { SpeechComponent } from './speech/speech.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeechesComponent,
    CreateSpeechComponent,
    HomeComponent,
    SpeechComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
