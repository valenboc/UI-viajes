import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-modal',
  templateUrl: './filtro-modal.component.html',
  styleUrls: ['./filtro-modal.component.scss']
})
export class FiltroModalComponent {
  @Input() criterios: any = {}; // Recibe los criterios desde el componente padre
  @Output() criteriosChange = new EventEmitter<any>(); // Emite cambios en los criterios
  @Output() aplicarFiltro = new EventEmitter<any>(); 
  @Output() cerrarModalEvent = new EventEmitter<void>();

  actualizarCriterios(): void {
    this.criteriosChange.emit(this.criterios); // Emitir cambios en tiempo real
  }

  aplicar(): void {
    this.aplicarFiltro.emit(this.criterios);
  }

  limpiar(): void {
    this.criterios = {
      origen: '',
      destino: '',
      horario: '',
      tarifa: '',
      fecha: '',
      aerolinea: '',
      soloDirectos: false
    };
    this.actualizarCriterios(); 
  }

  cerrarModal(): void {
    this.cerrarModalEvent.emit();
  }
}
