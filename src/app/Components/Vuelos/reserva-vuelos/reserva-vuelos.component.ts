import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reserva-vuelos',
  templateUrl: './reserva-vuelos.component.html',
  styleUrls: ['./reserva-vuelos.component.scss']
})
export class ReservaVuelosComponent {
  @Input() reserva: any = { vuelo: null, pasajeros: 1, asiento: '' };
  @Input() reservas: any[] = [];
  @Output() onReservaConfirmada = new EventEmitter<any>();
  @Output() onReservaCancelada = new EventEmitter<any>();

  confirmarReserva(): void {
    if (!this.reserva.vuelo || !this.reserva.pasajeros) {
      Swal.fire('Error', 'Por favor completa todos los datos de la reserva.', 'error');
      return;
    }
    const nuevaReserva = {
      vuelo: { ...this.reserva.vuelo },
      pasajeros: this.reserva.pasajeros,
      asiento: this.reserva.asiento,
    };
    this.onReservaConfirmada.emit(nuevaReserva);
    Swal.fire('Reserva exitosa', 'Tu reserva ha sido confirmada.', 'success');
    this.reserva = { vuelo: null, pasajeros: 1, asiento: '' };
  }

  cancelarReserva(reserva: any): void {
    this.onReservaCancelada.emit(reserva);
    Swal.fire('Cancelado', 'Tu reserva ha sido cancelada.', 'info');
  }
}
