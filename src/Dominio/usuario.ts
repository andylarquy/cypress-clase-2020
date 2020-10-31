
import { Alimento,alimentoToJSON } from './alimento'
import { Condicion, condicionFromJSON, condicionToJSON } from './condicionAlimenticia'
import { NADA, Rutina, rutinaFromJSON, rutinaToJSON } from './rutina'


export const VALOR_IMC_SALUDABLE_MINIMO = 18
export const VALOR_IMC_SALUDABLE_MAXIMO = 30
export class Usuario {
    constructor(
        public id = 0,
        public userName = '',
        public password = '',
        public nombre = '',
        public peso = 0,
        public estatura = 0,
        public edad = 0,
        public rutina: Rutina = NADA,
        public condicionAlimenticia: Array<Condicion> = [],
        public alimentosPreferidos: Array<Alimento> = [],
        public alimentosDisgustados: Array<Alimento> = [],
        public seleccionado: boolean = false,
        public fechaNacimiento = new Date()
    ) { }

    static fromJSON(usuarioJSON): Usuario {
        return Object.assign(
            new Usuario(), usuarioJSON,
            //{ fechaNacimiento: (usuarioJSON.fechaNacimiento) },
            { rutina: rutinaFromJSON(usuarioJSON.rutina) },
            { condicionAlimenticia: usuarioJSON.condicionAlimenticia.map((condicion) => condicionFromJSON(condicion.condicionAlimenticia)) },
            { alimentosPreferidos: usuarioJSON.alimentosPreferidos.map((alimento) => Alimento.fromJSON(alimento)) },
            { alimentosDisgustados: usuarioJSON.alimentosDisgustados.map((alimento) => Alimento.fromJSON(alimento)) }
        )
    }

    toJSON(): any {
        return Object.assign(
            {...this},
            {condicionAlimenticia: this.condicionAlimenticia.map(condicion => condicionToJSON(condicion))},
            rutinaToJSON(this.rutina),
            { alimentosPreferidos: this.alimentosPreferidos.map((alimento) => alimentoToJSON(alimento)) },
            { alimentosDisgustados: this.alimentosDisgustados.map((alimento) => alimentoToJSON(alimento)) }
            
        )
    }

    public agregarAlimentoPreferido(alimento: Alimento){
        this.alimentosPreferidos.push(alimento)
    }

    public agregarAlimentoDisgustado(alimento: Alimento){
        this.alimentosDisgustados.push(alimento)
    }

    public calculoIMC(): number {
        return Math.round(this.peso / Math.pow(this.estatura, 2))
    }

    public imcEnBuenRango(): boolean {
        return this.calculoIMC() > VALOR_IMC_SALUDABLE_MINIMO && this.calculoIMC() < VALOR_IMC_SALUDABLE_MAXIMO
    }

    public esSaludable(): boolean {
        return this.imcEnBuenRango() && (!this.tieneCondicionesPreexistentes() || this.subsanaCondicionAlimenticia())
    }

    private tieneCondicionesPreexistentes(): boolean {
        return this.condicionAlimenticia.length > 0
    }

    public tieneCondicionAlimenticia(condicion: Condicion): boolean {
        return this.condicionAlimenticia.includes(condicion)
    }

    public subsanaCondicionAlimenticia(): boolean {
        return this.condicionAlimenticia.every(condicionAlimenticia => condicionAlimenticia.cumple(this))
    }

    public tipoRutina(rutina: Rutina): boolean {
        return this.rutina === rutina
    }

    public agregarCondicionAlimenticia(condicion: Condicion) {
        this.condicionAlimenticia.push(condicion)
    }
    public quitarCondicionAlimenticia(condicion: Condicion) {
        this.condicionAlimenticia = this.condicionAlimenticia.filter(
            _condicion => _condicion !== condicion
        )
    }

}

