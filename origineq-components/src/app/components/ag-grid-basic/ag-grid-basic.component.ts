import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid-basic',
  templateUrl: './ag-grid-basic.component.html',
  styleUrls: ['./ag-grid-basic.component.scss']
})
export class AgGridBasicComponent implements OnInit {
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
