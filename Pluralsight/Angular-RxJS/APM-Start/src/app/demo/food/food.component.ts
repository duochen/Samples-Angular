import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodComponent implements OnInit {
  @Input() data: Observable<any>;
  foodList: string[] = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.data.subscribe(item => {
      this.foodList = [...this.foodList, ...item];
      console.log('Food list: ', this.foodList);
      this.cd.markForCheck();
    });
  };

  refresh() {
    console.log('refresh is clicked');
    this.cd.detectChanges();
  }
}
