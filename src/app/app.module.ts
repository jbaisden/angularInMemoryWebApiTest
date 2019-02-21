import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormComponent } from './test-form/test-form.component';
import { TestListComponent } from './test-list/test-list.component';
import { TestItemComponent } from './test-item/test-item.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './fake-backend.service';
import { HttpClientModule } from '@angular/common/http';
import { TestEditComponent } from './test-edit/test-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestFormComponent,
    TestListComponent,
    TestItemComponent,
    TestEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      FakeBackendService, { delay: 0, dataEncapsulation: false }
    ),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
