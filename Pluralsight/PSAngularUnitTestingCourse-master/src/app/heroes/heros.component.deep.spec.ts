import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';
import { HeroComponent } from '../hero/hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HerosComponent  (deep test)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROS;

  beforeEach(() => {
    HEROS = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wondeful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should render each hero as a HeroComponent', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROS));

    // run ngOnInit
    fixture.detectChanges();

    const heroComponetDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
    expect(heroComponetDEs.length).toEqual(3);
    for (let i = 0; i < heroComponetDEs.length; i++) {
        expect(heroComponetDEs[i].componentInstance.hero).toEqual(HEROS[i]);
    }
  });

  it(`should call heroService.deleteHero when the Hero Component's
      delete button is clicked`, () => {
        spyOn(fixture.componentInstance, 'deleteHero');

        mockHeroService.getHeroes.and.returnValue(of(HEROS));

        fixture.detectChanges();

        const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
        // heroComponents[0].query(By.css('button'))
        //   .triggerEventHandler('click', {stopPropagation: () => {}});
        // (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);
        heroComponents[0].triggerEventHandler('delete', null);

        expect(fixture.componentInstance.deleteHero).toHaveBeenCalledWith(HEROS[0]);

      });
});
