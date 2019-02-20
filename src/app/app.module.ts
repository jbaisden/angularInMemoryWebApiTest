import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestItemComponent } from './test-item/test-item.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './fake-backend.service';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    TestListComponent,
    TestItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      FakeBackendService, { delay: 0, dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
