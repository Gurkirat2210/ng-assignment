import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MessageServiceService } from './message-service.service';
import { ProdServiceService } from './prod-service.service';
import { DetailComponent } from './detail/detail.component';
import { RoutingModule }     from './routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports:      [ BrowserModule, RoutingModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, DetailComponent, AddComponent,ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessageServiceService, ProdServiceService]
})
export class AppModule { }
