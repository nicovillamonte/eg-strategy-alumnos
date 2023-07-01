# Ejercicio Alumnes - Strategy

Esta es una implementación del ejemplo de Alumnos implementado en NestJS con TypeScript.
Solamente es una traducción de lenguaje del [ejemplo de Alumnos del docente Fernando Dodino](https://github.com/uqbar-project/video-strategy-alumnes) desarrollado en kotlin.

## Dominio
Nos interesa sabe si un alumno va a estudiar para un parcial.

- Los estudiosos estudian siempre
- Los vagos estudian solo si le fue mal en el último examen
- Los hijos del rigor estudian si el parcial es difícil (si tiene más de 5 preguntas)