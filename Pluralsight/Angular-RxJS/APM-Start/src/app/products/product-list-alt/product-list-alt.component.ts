import { catchError } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '../product.service';
import { EMPTY, Subject } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListAltComponent  {
  pageTitle = 'Products';
  errorMessageSubjectAction = new Subject<string>();
  errorMessage$ = this.errorMessageSubjectAction.asObservable();

  selectedProduct$ = this.productService.selectedProduct$;

  products$ = this.productService.productWithCategory$.pipe(
    catchError(
      err => {
        this.errorMessageSubjectAction.next(err);
        return EMPTY;
      }
    )
  );

  constructor(private productService: ProductService) { }

  onSelected(productId: number): void {
    this.productService.productSelectedSubject.next(productId);
  }
}
