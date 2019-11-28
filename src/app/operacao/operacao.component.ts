import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { OperacaoAPIServiceService } from '../operacao-apiservice.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Observable } from 'rxjs';


@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  apiForms : FormGroup;

  constructor(private formBuilder: FormBuilder, private operacaoapiservice: OperacaoAPIServiceService) {
    this.apiForms = this.formBuilder.group({
      num1 : this.formBuilder.control(''),
      num2 : this.formBuilder.control('')
    })
   }

  ngOnInit() {
  }

  onProcessar(num1: string, num2: string) {

    
  }
  

}
