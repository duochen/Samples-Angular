export class Stock {
    favorite: boolean = false;

    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number) {}

        isPositiveChange(): boolean {
            return this.price >= this.previousPrice;
        }

        isLargeChange() : boolean {
            let diff = this.price / this.previousPrice - 1;
            let largeChange = Math.abs(diff) > 0.01;
            return largeChange;
        }
}
