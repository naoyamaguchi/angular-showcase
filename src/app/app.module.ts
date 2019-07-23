import { BrowserModule, ɵDomSanitizerImpl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// environment
import { environment } from '../environments/environment';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

// flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// 3rd party (leaflet)
import * as Raven from 'raven-js';
import { ErrorHandler } from '@angular/core';
Raven
  .config('https://6e025b377f3945508dfc2b3ef7ca70d3@sentry.io/1436874')
  .install();
export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    if (environment.production) {
      Raven.captureException(err);
    }
  }
}

// component
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormAndValidationComponent } from './form-and-validation/form-and-validation.component';
import { FileComponent } from './file/file.component';
import { UploadFileDialogComponent } from './file/upload-file-dialog';
import { PreviewComponent } from './file/preview.component';
import { FileDropDirective } from './directives/file-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    NavigationComponent,
    FormAndValidationComponent,
    FileComponent,
    UploadFileDialogComponent,
    PreviewComponent,
    FileDropDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // material
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatTableModule,
    CdkTableModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  entryComponents: [
    // SavePictureDialogComponent,
    UploadFileDialogComponent,
    PreviewComponent,
  ],
  providers: [
    // { provide: ErrorHandler, useClass: RavenErrorHandler },
    ɵDomSanitizerImpl,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
