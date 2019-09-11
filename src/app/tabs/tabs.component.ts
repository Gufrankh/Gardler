import { Input,Component, OnInit ,ViewEncapsulation,ViewChild} from '@angular/core';
import {MatPaginator,MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }
  @Input()
  httpRequestHeaders: HttpHeaders | {
    [header: string]: string | string[];
  } = new HttpHeaders().set("sampleHeader", "headerValue").set("sampleHeader1", "headerValue1");

  @Input()
  httpRequestParams: HttpParams | {
    [param: string]: string | string[];
  } = new HttpParams().set("sampleRequestParam", "requestValue").set("sampleRequestParam1", "requestValue1");

  public uploadEvent($event: any) {
    console.log('from client' + JSON.stringify($event));
  }
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayedColumns: string[] = ['Invoice_Number', 'Invoice_Line_Ref_No', 'Product_ID_Description','HSN_SAC_ID', 'Product_QTY', 'UOM','Rate', 'WorkOrder_Line_Amount'];


}
export interface WorkElement {
  Product_ID_Description: string;
  Invoice_Number: number;
  Invoice_Line_Ref_No: number;
  HSN_SAC_ID: string;
  Product_QTY: number;
  UOM: string;
  Rate: number;
  WorkOrder_Line_Amount:number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079},
//   {position: 2, name: 'Helium', weight: 4.0026},
//    {position:3, name: 'Lithium', weight: 6.941},
//   {position: 4, name: 'Beryllium', weight: 9.0122},
//   {position: 5, name: 'Boron', weight: 10.811},
//   {position: 6, name: 'Beryllium', weight: 9.0122},
//   {position: 7, name: 'Boron', weight: 10.811},
  
// ];

const ELEMENT_DATA: WorkElement[] = [
  {Invoice_Number : 1, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
  {Invoice_Number : 2, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
   {Invoice_Number : 3, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000}, 
   {Invoice_Number : 4, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
   {Invoice_Number : 5, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
   {Invoice_Number : 6, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
   {Invoice_Number : 7, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
   {Invoice_Number : 1, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
   {Invoice_Number : 2, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
    {Invoice_Number : 3, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000}, 
    {Invoice_Number : 4, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
    {Invoice_Number : 5, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
    {Invoice_Number : 6, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
    {Invoice_Number : 7, Invoice_Line_Ref_No:12,Product_ID_Description :'description1',HSN_SAC_ID  :'asjghb',Product_QTY : 2,UOM  :'sffsssf',Rate: 1,WorkOrder_Line_Amount : 1000},
];
