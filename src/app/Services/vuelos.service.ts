import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  vuelos = [
    { id: 1, origen: 'Bogotá', destino: 'Medellín', horario: '10:00 AM', precio: 300, asientosDisponibles: 5 },
    { id: 2, origen: 'Bogotá', destino: 'Cartagena', horario: '02:00 PM', precio: 450, asientosDisponibles: 8 },
    { id: 3, origen: 'Medellín', destino: 'Cali', horario: '06:00 PM', precio: 350, asientosDisponibles: 3 },
  ];

  constructor() { }

  consultarVuelos(origen: string, destino: string, filtro: string) {
    let resultados = this.vuelos.filter(v => v.origen === origen && v.destino === destino);
    if (filtro === 'precio') {
      resultados = resultados.sort((a, b) => a.precio - b.precio);
    }
    return resultados;
  }

  reservarVuelo(id: number, pasajeros: number) {
    let vuelo = this.vuelos.find(v => v.id === id);
    if (vuelo && vuelo.asientosDisponibles >= pasajeros) {
      vuelo.asientosDisponibles -= pasajeros;
      return true;
    }
    return false;
  }
}
