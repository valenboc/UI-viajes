import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Compra, Reserva } from 'src/app/Interfaces/Interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-compra-billetes',
  templateUrl: './compra-billetes.component.html',
  styleUrls: ['./compra-billetes.component.scss']
})
export class CompraBilletesComponent {
  @Input() reservas: Reserva[] = [];
  @Output() compraConfirmada = new EventEmitter<Reserva>();

  compra: Compra = {
    reserva: null,
    tarjeta: ''
  };

  comprarBillete(reserva: Reserva): void {
    this.compra.reserva = reserva;
    Swal.fire('Compra iniciada', 'Por favor ingresa los datos de tu tarjeta.', 'info');
  }

  confirmarCompra(): void {
    if (!this.compra.reserva || !this.compra.tarjeta) {
      Swal.fire('Error', 'Por favor completa todos los datos para la compra.', 'error');
      return;
    }
    Swal.fire('Compra exitosa', 'Tu billete ha sido generado.', 'success');
    this.compraConfirmada.emit(this.compra.reserva);
    this.compra = { reserva: null, tarjeta: '' };
  }
}
