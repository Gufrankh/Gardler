import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-materials-form',
  templateUrl: './materials-form.component.html',
  styleUrls: ['./materials-form.component.css']
})
export class MaterialsFormComponent 
{
  email=new FormControl('',[Validators.required,Validators.email]);
  getErrorMessage()
  {
    return this.email.hasError('required')? 'Please Enter E-mail':
    this.email.hasError('email')?'Not a valid Email':
    '';
  }
  cname=new FormControl('',[Validators.required]);
  getCNameErrorMessage()
  {
    return this.cname.hasError('required')?'Please Select Customer Name':
    '';
  }
  pname=new FormControl('',[Validators.required]);
  getPNameErrorMessage()
  {
    return this.pname.hasError('required')?'Please Enter Project Name':
    '';
  }
  location=new FormControl('',[Validators.required]);
  getLocationErrorMessage()
  {
    return this.location.hasError('required')?'Please Select Location':
    '';
  }
  pe=new FormControl('',[Validators.required]);
  getPeErrorMessage()
  {
    return this.pe.hasError('required')?'Please Select Project Engineer':
    '';
  }
  pt=new FormControl('',[Validators.required]);
  getPtErrorMessage()
  {
    return this.pt.hasError('required')?'Please Select Project Type':
    '';
  }
}
