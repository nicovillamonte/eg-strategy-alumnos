import { Alumno } from './alumno';
import { Parcial } from './parcial';

describe('Test Alumnos', () => {
  describe('Dada una persona estudiosa', () => {
    const estudiosa = new Alumno();
    estudiosa.criterioEstudiosa();

    const parcial = new Parcial();

    it('siempre estudia para un parcial', () => {
      expect(estudiosa.estudiaPara(parcial)).toBeTruthy();
    });
  });

  describe('Dada una persona vaga', () => {
    const vaga = new Alumno();
    vaga.criterioVaga();

    const parcial = new Parcial();

    it('no estudia si le fue bien la última vez', () => {
      vaga.rindioParcial(2);
      vaga.rindioParcial(7);
      expect(vaga.estudiaPara(parcial)).toBeFalsy();
    });

    it('estudia si no le fue bien la última vez', () => {
      vaga.rindioParcial(7);
      vaga.rindioParcial(2);
      expect(vaga.estudiaPara(parcial)).toBeTruthy();
    });
  });

  describe('Dada una persona hija del rigor', () => {
    const hijaDelRigor = new Alumno();
    hijaDelRigor.criterioHijaDelRigor();

    const parcialFacil = new Parcial(5);
    const parcialDificil = new Parcial(6);

    it('no estudia si el parcial es fácil', () => {
      expect(hijaDelRigor.estudiaPara(parcialFacil)).toBeFalsy();
    });

    it('estudia si el parcial es difícil', () => {
      expect(hijaDelRigor.estudiaPara(parcialDificil)).toBeTruthy();
    });
  });
});
