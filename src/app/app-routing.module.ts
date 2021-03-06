import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

//Pages
import { CrearSolicitudComponent } from './pages/crear-solicitud/crear-solicitud.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { FormatoPaseSalidaComponent } from './common/formato-pase-salida/formato-pase-salida.component';
import { LoginComponent} from '../app/pages/login/login.component';
import { SolicitudesRecibidasComponent} from '../app/pages/solicitudes-recibidas/solicitudes-recibidas.component';
import { MarcarEntradaSalidaComponent} from '../app/pages/marcar-entrada-salida/marcar-entrada-salida.component';
import { MisSolicitudesComponent} from '../app/pages/mis-solicitudes/mis-solicitudes.component';
import { VerSolicitudComponent} from '../app/pages/ver-solicitud/ver-solicitud.component';
import { MantenimientoEmpleadosComponent} from '../app/pages/mantenimiento-empleados/mantenimiento-empleados.component';
import { MantenimientoMotivosComponent} from '../app/pages/mantenimiento-motivos/mantenimiento-motivos.component';
import { AuthService} from './guards/auth.service';
import { ReporteEntradasSalidasComponent} from '../app/pages/reporte-entradas-salidas/reporte-entradas-salidas.component';
import { MantenimientoEmpleadosAreaComponent} from '../app/pages/mantenimiento-empleados-area/mantenimiento-empleados-area.component';
import {NotFoundComponent} from '../app/pages/not-found/not-found.component';
import {CrearPaseRecurrenteComponent} from '../app/pages/crear-pase-recurrente/crear-pase-recurrente.component';
//Guards
import {RoleGuardService} from './guards/role-guard.service';
import {RoleMarcajeService} from './guards/role-marcaje.service';
import {RoleUsuarioEstandarGuard} from '../app/guards/role-usuario-estandar.guard';

//Nuevas
import {PersonasComponent} from '../app/pages/personas/personas.component';
import { NuevaPersonaComponent } from './pages/nueva-persona/nueva-persona.component';
import { FormaDePagoComponent } from './pages/forma-de-pago/forma-de-pago.component';
import { FacturasPendientesComponent } from './pages/facturas-pendientes/facturas-pendientes.component';
import { MisFacturasComponent } from './pages/mis-facturas/mis-facturas.component';
import { VerFacturaComponent } from './pages/ver-factura/ver-factura.component';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { MisVisitasComponent } from './pages/mis-visitas/mis-visitas.component';
import { NuevoAnuncioComponent } from './pages/nuevo-anuncio/nuevo-anuncio.component';
import { AnunciosComponent } from './pages/anuncios/anuncios.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { FacturasPeriodoComponent } from './pages/facturas-periodo/facturas-periodo.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { VerViviendaComponent } from './pages/ver-vivienda/ver-vivienda.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { EnviarCorreoComponent } from './pages/enviar-correo/enviar-correo.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { FacturadasHoyComponent } from './pages/facturadas-hoy/facturadas-hoy.component';
import { FacturasPagadasComponent } from './pages/facturas-pagadas/facturas-pagadas.component';
import { FacturasSinPagarComponent } from './pages/facturas-sin-pagar/facturas-sin-pagar.component';
import { FacturasTodasComponent } from './pages/facturas-todas/facturas-todas.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'crearSolicitud' , component : CrearSolicitudComponent , canActivate  : [RoleUsuarioEstandarGuard]  },
  {path : 'crearPaseRecurrente' , component : CrearPaseRecurrenteComponent , canActivate  : [AuthService]},
  {path : 'solicitudes', component : SolicitudesComponent , canActivate  : [AuthService] },
  {path : 'solicitudesRecibidas' , component : SolicitudesRecibidasComponent , canActivate  : [AuthService]},
  {path : 'formato/:solicitudId', component : FormatoPaseSalidaComponent , canActivate  : [AuthService]},
  {path : 'marcarEntradaSalida', component : MarcarEntradaSalidaComponent , canActivate  : [RoleMarcajeService], data: { expectedRole2: '3'} },
  {path : 'misSolicitudes', component : MisSolicitudesComponent , canActivate  :  [RoleUsuarioEstandarGuard]   },
  {path : 'verSolicitud/:solicitudId', component : VerSolicitudComponent , canActivate  : [AuthService]},
  {path : 'verSolicitud/:solicitudId/:recurrente', component : VerSolicitudComponent , canActivate  : [AuthService]},
  {path : 'mantenimientoEmpleados' , component : MantenimientoEmpleadosComponent , canActivate  : [AuthService] , data: { expectedRole1: '1'  } },
  {path : 'mantenimientoPorArea' , component : MantenimientoEmpleadosAreaComponent, canActivate  : [AuthService] , data: { expectedRole1: '4'  } },
  {path : 'mantenimientoMotivos' , component : MantenimientoMotivosComponent , canActivate  : [RoleGuardService] , data: { expectedRole1: '1'  }  },
  {path : 'reporteEntradasSalidas' , component : ReporteEntradasSalidasComponent ,   canActivate  : [AuthService] }, 

  {path : 'personas', component : PersonasComponent, canActivate : [AuthService]},
  {path : 'nuevaPersona', component : NuevaPersonaComponent, canActivate : [AuthService]},
  {path : 'formasDePago', component : FormaDePagoComponent, canActivate : [AuthService]},
  {path : 'facturas', component : FacturasComponent, canActivate : [AuthService]},
  {path : 'verPersona/:personaId', component : PersonaComponent, canActivate : [AuthService]},
  {path : 'facturasPendientes/:viviendaId', component : FacturasPendientesComponent, canActivate : [AuthService]},
  // {path : 'pagarFactura/:facturaId', component : PagarFacturaComponent, canActivate : [AuthService]},
  {path : 'verFactura/:facturaId', component : VerFacturaComponent, canActivate : [AuthService]},
  {path : 'misFacturas', component : MisFacturasComponent, canActivate : [AuthService]},
  {path : 'facturasPeriodo/:anio/:mes', component : FacturasPeriodoComponent, canActivate : [AuthService]},
  {path : 'visitas', component : VisitasComponent, canActivate : [AuthService]},
  {path : 'misVisitas', component : MisVisitasComponent, canActivate : [AuthService]},
  {path : 'nuevoAnuncio', component : NuevoAnuncioComponent, canActivate : [AuthService]},
  {path : 'anuncios', component : AnunciosComponent, canActivate : [AuthService]},
  {path : 'servicios', component : ServiciosComponent, canActivate : [AuthService]},
  {path : 'verVivienda/:viviendaId', component : VerViviendaComponent, canActivate : [AuthService]},
  {path : 'enviarCorreo', component : EnviarCorreoComponent, canActivate : [AuthService]},
  {path : 'reportes', component : ReportesComponent, canActivate : [AuthService],
   children : [
    {
      path : '', component : FacturasTodasComponent
    },
    {
      path : 'facturasPagadas', component : FacturasPagadasComponent
    },
    {
      path : 'facturasPendiente', component : FacturasSinPagarComponent
    },
    {
      path : 'facturasTodas', component : FacturasTodasComponent
    }
  ] },

  {path : '**', component :  NotFoundComponent ,  canActivate  : [AuthService] }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
