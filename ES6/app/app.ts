import { TextBoxComponent } from './module1';
import { Logger} from './logger';

let textBox = new TextBoxComponent('hello world');
textBox.render();

let logger = new Logger('content');
logger.info('hello world');