import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vuelo } from 'src/app/Interfaces/Interfaces';


@Component({
  selector: 'app-consulta-vuelos',
  templateUrl: './consulta-vuelos.component.html',
  styleUrls: ['./consulta-vuelos.component.scss']
})
export class ConsultaVuelosComponent {
  @Input() vuelos: Vuelo[] = [];
  @Input() itemsPerPage: number = 6;
  @Output() reservarVuelo = new EventEmitter<Vuelo>();

  filteredVuelos: Vuelo[] = [];
  page: number = 1;
  mostrarModal: boolean = false;

  filtroCriterios: any = {
    origen: '',
    destino: '',
    horario: '',
    tarifa: '',
    fecha: '',
    aerolinea: '',
    soloDirectos: false,
  };

  ngOnInit(): void {
    this.filteredVuelos = [...this.vuelos];
  }

  sortByTarifa(): void {
    this.filteredVuelos.sort((a, b) => a.Tarifa - b.Tarifa);
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  aplicarFiltro(criterios: any): void {
    this.filtroCriterios = { ...criterios };
    this.filtrarVuelos();
    this.cerrarModal();
  }

  filtrarVuelos(): void {
    this.filteredVuelos = this.vuelos.filter(vuelo =>
      (!this.filtroCriterios.origen || vuelo.Origen.toLowerCase().includes(this.filtroCriterios.origen.toLowerCase())) &&
      (!this.filtroCriterios.destino || vuelo.Destino.toLowerCase().includes(this.filtroCriterios.destino.toLowerCase())) &&
      (!this.filtroCriterios.horario || vuelo.Horario === this.filtroCriterios.horario) &&
      (!this.filtroCriterios.tarifa || vuelo.Tarifa <= this.filtroCriterios.tarifa) &&
      (!this.filtroCriterios.fecha || vuelo.Fecha === this.filtroCriterios.fecha) &&
      (!this.filtroCriterios.aerolinea || vuelo.Aerolinea.toLowerCase().includes(this.filtroCriterios.aerolinea.toLowerCase())) &&
      (!this.filtroCriterios.soloDirectos || vuelo.Directo)
    );
  }

  reservar(vuelo: Vuelo): void {
    if (vuelo.Disponibilidad) {
      this.reservarVuelo.emit(vuelo);
    }
  }
}
