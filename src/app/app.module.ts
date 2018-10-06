import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { TDFormComponent } from './tdform/tdform.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrderComponent } from './order/order.component';
import { OffersComponent } from './offers/offers.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { ApiaccessComponent } from './apiaccess/apiaccess.component';
import { HttpClientModule} from "@angular/common/http";
import { ApiService } from './apiaccess/api.service';
import { PreviewItemsComponent } from './preview-items/preview-items.component';
import { SampleDBComponent } from './sample-db/sample-db.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DBConfig } from './sample-db/dbConfig';
import { DbService } from './sample-db/db-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    TDFormComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    LoginPageComponent,
    OrderComponent,
    OffersComponent,
    MenuItemsComponent,
    SouthIndianComponent,
    ApiaccessComponent,
    PreviewItemsComponent,
    SampleDBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpClientModule,
    AngularFireModule.initializeApp(DBConfig.config),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
      path: "order",
      component: SouthIndianComponent,
      children: [
        {
          path:"preview",
          component:PreviewItemsComponent
        }
      ]
      },
      {
        path:"offer",
        component:OffersComponent
      }      
    ])
  ],
  providers: [ApiService,DbService],
  bootstrap: [AppComponent]

})

export class AppModule {

 }
