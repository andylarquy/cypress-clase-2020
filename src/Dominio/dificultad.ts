
export class DificultadFacil {
    tipoDificultad = 'Fácil';
  }
  
  export class DificultadMedia {
    tipoDificultad = 'Media';
  }
  
  export class DificultadDificil {
    tipoDificultad = 'Dificil';
  }

  export const dificultadFromJSON = (difcultadJSON) => {
    return Dificultades.find(rutina => rutina.tipoDificultad.toLowerCase() === difcultadJSON.toLowerCase())
  }

  export const dificultadToJSON = (dificultad: Dificultad) => {
    return {dificultad: dificultad.tipoDificultad.toUpperCase()}
  }
  
  export type Dificultad = DificultadFacil | DificultadMedia | DificultadDificil;
  
  export const FACIL = new DificultadFacil();
  export const MEDIA = new DificultadMedia();
  export const DIFICIL = new DificultadDificil();
    
  export const Dificultades = [FACIL, MEDIA, DIFICIL];
  