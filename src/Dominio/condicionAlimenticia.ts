import { Usuario } from './usuario'
import { GrupoAlimento } from './alimento'
import { ACTIVA, INTENSA } from './rutina'

export const condicionFromJSON = (condicion: string) => {
	if (condicion === 'Celiaco') { return CELIACO }
	if (condicion === 'Diabetico') { return DIABETICO }
	if (condicion === 'Hipertenso') { return HIPERTENSO }
	if (condicion === 'Vegano') { return VEGANO }
	if (condicion === 'Vegetariano') { return VEGETARIANO }
}

export const condicionToJSON = (condicion: Condicion) => {
	return {
		type: condicion.tipo,
		condicionAlimenticia: condicion.tipo
	}
}
export interface CondicionAlimenticia {
	cumple(user: Usuario): boolean
	tipo: string
	getTipo()
}

export class Vegetariano implements CondicionAlimenticia {

	tipo = "Vegetariano"

	public getTipo() {
		return this.tipo
	}

	public cumple(user: Usuario): boolean {
		return user.edad < 30 || !this.tieneAlimentosConGrasas(user)
	}
	public tieneAlimentosConGrasas(user: Usuario) {
		return user.alimentosPreferidos.filter(alimento => alimento.numeroDeGrupo == GrupoAlimento.ACEITES_GRASAS_AZUCARES).length >= 1
	}
}

export class Vegano implements CondicionAlimenticia {

	tipo = "Vegano"

	public cumple(user: Usuario) {
		return this.cantidadDeFrutasMayorA2(user)
	}
	public cantidadDeFrutasMayorA2(user: Usuario): boolean {
		return user.alimentosPreferidos.filter(alimento => alimento.numeroDeGrupo == GrupoAlimento.HORTALIZAS_FRUTAS_SEMILLAS).length >= 2
	}
	public getTipo() {
		return this.tipo
	}
}

export class Hipertenso implements CondicionAlimenticia {

	tipo = "Hipertenso"

	public cumple(user: Usuario) {
		return user.tipoRutina(INTENSA)
	}
	public getTipo() {
		return this.tipo
	}
}

export class Diabetico implements CondicionAlimenticia {

	tipo = "Diabetico"

	public cumple(user: Usuario) {
		return user.tipoRutina(ACTIVA) || user.peso > 70
	}
	public getTipo() {
		return this.tipo
	}
}

export class Celiaco implements CondicionAlimenticia {

	tipo = "Celiaco"

	public cumple(user: Usuario) {
		return true
	}
	public getTipo() {
		return this.tipo
	}
}

export type Condicion = Celiaco | Diabetico | Hipertenso | Vegano | Vegetariano

export const CELIACO = new Celiaco()
export const DIABETICO = new Diabetico()
export const HIPERTENSO = new Hipertenso()
export const VEGANO = new Vegano()
export const VEGETARIANO = new Vegetariano()

export const Condiciones = [CELIACO, DIABETICO, HIPERTENSO, VEGANO, VEGETARIANO]

