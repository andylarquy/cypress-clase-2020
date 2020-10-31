
import { Condicion } from "./condicionAlimenticia"

export class Alimento {

    constructor(
        public id?: 0,
        public inadecuadoPara?: Array<Condicion>,
        public nombre?: '',
        public descripcion?: String,
        public numeroDeGrupo?: GrupoAlimento) { }

    static fromJSON(alimentoJSON): Alimento {
        return Object.assign(new Alimento(), alimentoJSON,
            { inadecuadoPara: alimentoJSON.inadecuadoPara })
    }

}

export const alimentoToJSON = (alimentoJSON: Alimento) => {
    return Object.assign(new Alimento(), alimentoJSON,
        { inadecuadoPara: alimentoJSON.inadecuadoPara })
}

export class Ingrediente {
    constructor(
        public alimento: Alimento,
        public cantidad: String) { }

    public inadecuadoPara() {
        return this.alimento.inadecuadoPara
    }

    toJSON(): any {
        return Object.assign(
            {...this},
            {alimento: alimentoToJSON(this.alimento)},            
        )
    }

}

export enum GrupoAlimento {
    HORTALIZAS_FRUTAS_SEMILLAS,
    CEREALES_LEGUMBRES_DERIVADOS,
    LACTEOS_DERIVADOS,
    ACEITES_GRASAS_AZUCARES,
    CARNES_PESCADO_HUEVO
}