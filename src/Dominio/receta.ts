import { Usuario } from './usuario'
import { Ingrediente } from './alimento'
import { Condicion, condicionFromJSON } from './condicionAlimenticia'
import { dificultadFromJSON } from './dificultad'

export class NivelDificultad {

    constructor(
        public tipo?: String,
        public nivelDeDificultad?: number) { }

    static fromJSON(dificultadJSON): NivelDificultad {
        return Object.assign(new NivelDificultad(), dificultadJSON)
    }

    static toJSON(dificultad): any {
        return JSON.stringify(dificultad)
    }

}

export class Receta {

    constructor(
        public id?: number,
        public titulo?: string,
        public autorUserName?: String,
        public calorias?: number,
        public imagen?: String,
        public dificultad?: NivelDificultad,
        public autor?: String,
        public autorReceta?: Usuario,
        public colaboradores?: Array<Usuario>,
        public procesoDePreparacion?: Array<string>,
        public condicionesInadecuadas?: Array<Condicion>,
        public ingredientes?: Array<Ingrediente>,
    ) { }

    static fromJSON(recetaJSON): Receta {
        return Object.assign(
            new Receta(), recetaJSON,
            { condicionesInadecuadas: recetaJSON.condicionesInadecuadas.map((condicion) => condicionFromJSON(condicion.condicionAlimenticia))},
            
        )
    }

    toJSON(): any {
        return  {...this}
    }

    public agregarColaborador(user: Usuario) {
        this.colaboradores.push(user)
    }

    public quitarColaborador(user: Usuario) {
        let posicion = this.colaboradores.indexOf(user)
        this.colaboradores.splice(posicion)
    }

    public esAutor(user: Usuario): boolean {
        return this.autorReceta === user
    }

    public esColaborador(user: Usuario): boolean {
        return this.colaboradores.includes(user)
    }

    public esEditable(user: Usuario) {
        return this.esAutor(user) || this.esColaborador(user)
    }

    public agregarIngrediente(ingrediente: Ingrediente) {
        this.ingredientes.push(ingrediente)
    }

    inadecuadaPara(): Array<Condicion> {
        return this.ingredientes.flatMap(ingrediente => ingrediente.inadecuadoPara())
    }


}

