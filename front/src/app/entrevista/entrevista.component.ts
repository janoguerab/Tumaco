import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent {
    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    now = new Date();
    asesor="NOMBRE ASESOR";
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  progCurricular = new FormControl();
  tipoProgCurricular: string;
  tipoProgCurricularSel:string;
  progCurricularGrupos = [
    {
      name: 'Pregrado',
      programa: [
        { value: 'pregrado-0', viewValue: 'Administración de Empresas' },
        { value: 'pregrado-1', viewValue: 'Antropología' },
        { value: 'pregrado-2', viewValue: 'Arquitectura ' }
      ]
    },
    {
      name: 'Posgrado',
      programa: [
        { value: 'posgrado-1', viewValue: 'Doctorado en Agroecología' },
        { value: 'posgrado-2', viewValue: 'Doctorado en Antropología' },
        { value: 'posgrado-3', viewValue: 'Doctorado en Arte y Arquitectura' }
      ]
    }
  ];

  tipoIngreso=['Regular','PAES','PEAMA','Foráneo','Intercambio'];
  tipoVivienda=['Familiar','Arriendo','Propia','Residencia universitaria'];
tipoResidencia=['Rural','Urbano'];
tipoSexo=['H','M','I'];
tipoIdentidadGenero=['H','M','T'];
tipoOrientacionSexual=['L','G','B','H','I'];
tipoAsesoria=['Académica','Administrativa','Habilidades para el aprendizaje','Psicosocial','Soporte justificativo' ];
tipoAcademica=['Cancelación de semestre','Cancelación de asignatura','Académicos - reingreso','Carga mínima','Traslado','Iniciativas estudiantiles','Doble titulación','Homologaciones, convalidaciones y equivalencias','Habilidades para el aprendizaje']
}
