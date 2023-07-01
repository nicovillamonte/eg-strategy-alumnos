export class Parcial {
  constructor(public cantidadPreguntas: number = 10) {}

  public esDificil(): boolean {
    return this.cantidadPreguntas > 5;
  }
}
