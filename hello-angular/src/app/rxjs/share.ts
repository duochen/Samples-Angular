import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

// emit value in 1s
const source = timer(1000);
