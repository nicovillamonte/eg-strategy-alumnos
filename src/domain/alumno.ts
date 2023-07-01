import CriterioEstudio, {
  CriterioEstudiosa,
  CriterioHijaRigor,
  CriterioVaga,
} from './criterio';
import { Parcial } from './parcial';

export class Alumno {
  private criterioEstudio: CriterioEstudio = new CriterioEstudiosa();
  private notas: number[] = [];

  criterioEstudiosa(): void {
    this.criterioEstudio = new CriterioEstudiosa();
  }

  criterioVaga(): void {
    this.criterioEstudio = new CriterioVaga();
  }

  criterioHijaDelRigor(): void {
    this.criterioEstudio = new CriterioHijaRigor();
  }

  rindioParcial(nota: number): void {
    this.notas.push(nota);
  }

  estudiaPara = (parcial: Parcial): boolean =>
    this.criterioEstudio.estudiaPara(parcial, this);

  desaproboUltimoExamen = (): boolean => this.notas[this.notas.length - 1] < 6;
}
