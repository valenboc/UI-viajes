export interface Vuelo {
    Aerolinea: string;
    Origen: string;
    Destino: string;
    Horario: string;
    Tarifa: number;
    Disponibilidad: boolean;
    Fecha: string;
    Categoria: string;
    Directo: boolean;
  }
  
  export interface Reserva {
    vuelo: Vuelo | null;
    pasajeros: number;
    asiento: string;
  }
  
  export interface Compra {
    reserva: Reserva | null;
    tarjeta: string;
  }
  