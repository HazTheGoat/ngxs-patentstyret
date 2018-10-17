import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ContactState } from './contact.state';
import { ContactComponent } from './contact/contact.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
    declarations: [
        AppComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        NgxsModule.forRoot([
            ContactState
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsStoragePluginModule.forRoot()
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
