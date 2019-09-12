import { AppComponent } from './app.component';
import { Stock } from './model/stock';

describe('AppComponent', () => {
  it('should have stock instantiated on ngInit', () => {
    const appComponent = new AppComponent();
    expect(appComponent.stockObj).toBeUndefined();
    appComponent.ngOnInit();
    expect(appComponent.stockObj).toEqual(
      new Stock('Test Stock Company', 'TSC', 85, 80));
  });
});