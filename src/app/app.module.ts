import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/Register/register.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { VuelosComponent } from './Components/Vuelos/vuelos.component'; 
import { AuthGuard } from './Guards/auth.guard';
import { FiltroModalComponent } from './Components/Modals/filtro-modal/filtro-modal.component';
import { ConsultaVuelosComponent } from './Components/Vuelos/consulta-vuelos/consulta-vuelos.component';
import { ReservaVuelosComponent } from './Components/Vuelos/reserva-vuelos/reserva-vuelos.component';
import { CompraBilletesComponent } from './Components/Vuelos/compra-billetes/compra-billetes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'vuelos', component: VuelosComponent, canActivate: [AuthGuard] } 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    VuelosComponent,
    FiltroModalComponent,
    ConsultaVuelosComponent,
    ReservaVuelosComponent,
    CompraBilletesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
