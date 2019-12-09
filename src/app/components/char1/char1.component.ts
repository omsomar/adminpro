import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-char1',
  templateUrl: './char1.component.html',
  styleUrls: ['./char1.component.css']
})
export class Char1Component implements OnInit {

  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartData: MultiDataSet = [];
  @Input() doughnutChartType: ChartType = 'doughnut';
  
  constructor() { }

  ngOnInit() {
  }

}
