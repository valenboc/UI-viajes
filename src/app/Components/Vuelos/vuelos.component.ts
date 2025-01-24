import { Component, OnInit} from '@angular/core';
import { Reserva, Vuelo } from 'src/app/Interfaces/Interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss']
})
export class VuelosComponent implements OnInit {
  vuelos: Vuelo[] = [];
  filteredVuelos: Vuelo[] = [];
  reservas: Reserva[] = [];
  selectedTab: string = 'consulta';
  page: number = 1;
  itemsPerPage: number = 6;

  reserva: Reserva = {
    vuelo: null,
    pasajeros: 1,
    asiento: ''
  };

  constructor() {}

  ngOnInit(): void {
    this.loadVuelos();
  }

  loadVuelos(): void {
    this.vuelos = [
      { Aerolinea: "Aerolínea 1", Origen: "Bogotá", Destino: "Medellín", Horario: "08:00", Tarifa: 200, Disponibilidad: true, Fecha: "2025-01-24", Categoria: "Económica", Directo: true },
      { Aerolinea: "Aerolínea 2", Origen: "Bogotá", Destino: "Cali", Horario: "10:00", Tarifa: 180, Disponibilidad: true, Fecha: "2025-01-24", Categoria: "Económica", Directo: false },
      { Aerolinea: "Aerolínea 3", Origen: "Medellín", Destino: "Cartagena", Horario: "12:00", Tarifa: 250, Disponibilidad: false, Fecha: "2025-01-24", Categoria: "Negocios", Directo: true },
    ];
    this.filteredVuelos = [...this.vuelos];
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    if (tab === 'consulta') this.loadVuelos();
  }
  
  reservarVuelo(vuelo: Vuelo): void {
    if (!vuelo.Disponibilidad) {
      Swal.fire('Error', 'Este vuelo no tiene disponibilidad.', 'error');
      return;
    }
  
    this.reserva.vuelo = vuelo;
  
    Swal.fire({
      title: 'Reserva iniciada',
      text: `Reservando vuelo de ${vuelo.Origen} a ${vuelo.Destino}.`,
      icon: 'info',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        this.selectTab('reserva');
      }
    });
  }

  reservaConfirmada(reserva: Reserva): void {
    this.reservas.push(reserva);
  }

  reservaCancelada(reserva: Reserva): void {
    this.reservas = this.reservas.filter(r => r !== reserva);
  }

  compraConfirmada(reserva: Reserva): void {
    this.reservas = this.reservas.filter(r => r !== reserva);
  }
}
