import { Alumno } from './alumno';
import { Parcial } from './parcial';

interface CriterioEstudio {
  estudiaPara(parcial: Parcial, alumno: Alumno): boolean;
}

export class CriterioEstudiosa implements CriterioEstudio {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public estudiaPara(parcial: Parcial, alumno: Alumno): boolean {
    return true;
  }
}

export class CriterioVaga implements CriterioEstudio {
  public estudiaPara(parcial: Parcial, alumno: Alumno): boolean {
    return alumno.desaproboUltimoExamen();
  }
}

export class CriterioHijaRigor implements CriterioEstudio {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public estudiaPara(parcial: Parcial, alumno: Alumno): boolean {
    return parcial.esDificil();
  }
}

export default CriterioEstudio;
