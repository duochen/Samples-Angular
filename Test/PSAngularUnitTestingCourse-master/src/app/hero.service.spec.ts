import { TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";


describe('HeroService', () => {
    let mockMessageService;

    mockMessageService = jasmine.createSpyObj(['add', 'clear']);
    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                HeroService,
                { provide: MessageService, useValue: mockMessageService }
            ]
        })
    });
});