import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from "../../shared/log.service";

@Injectable()
export class CursosService {

    private cursos: string[] = ['Angular', 'React', 'Vue'];
    
    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();
    
    constructor(private logService: LogService) {
        console.log('cursosService foi instanciado.');
    }

    getCursos() {
        this.logService.consoleLog('Obtendo lista de cursos...');
        return this.cursos;
    }
    
    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso ${curso}...`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}