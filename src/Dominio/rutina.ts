
export class RutinaNada {
    nombre = 'Nada'
  }
  
  export class RutinaLeve {
    nombre = 'Leve'
  }
  
  export class RutinaMedia {
    nombre = 'Media'
  }
  
  export class RutinaActiva {
    nombre = 'Activa'
  }
  
  export class RutinaIntensiva {
    nombre = 'Intensa'
  }
  
  export const rutinaFromJSON = (rutinaJSON) => {
    return Rutinas.find(rutina => rutina.nombre.toLowerCase() === rutinaJSON.toLowerCase())
  }
  
  export const rutinaToJSON = (rutina: Rutina) => {
    return {rutina: rutina.nombre.toUpperCase()}
  }
  
  export type Rutina = RutinaNada | RutinaLeve | RutinaMedia | RutinaActiva | RutinaIntensiva
  
  export const LEVE = new RutinaLeve()
  export const NADA = new RutinaNada()
  export const MEDIA = new RutinaMedia()
  export const ACTIVA = new RutinaActiva()
  export const INTENSA = new RutinaIntensiva()
  
  export const Rutinas = [LEVE, NADA, MEDIA, ACTIVA, INTENSA]
  