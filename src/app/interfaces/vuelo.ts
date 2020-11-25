import { Time } from '@angular/common';

export interface Vuelo {
    
    idVuelo: number;
    fecha: Date;
    horaSalida: Time;
    horaLlegada: Time;
    precio: number;
    origen: String;
    destino: String;
}
