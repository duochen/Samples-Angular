import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';
import { Hero } from '../hero';


describe('HerosComponent', () => {
  let component: HeroesComponent;
  let HEROS;
  let mockHeroService;

  beforeEach(() => {
    HEROS = [
      {id: 1, name: 'SpiderDude', strength: 8},
      {id: 2, name: 'Wondeful Woman', strength: 24},
      {id: 3, name: 'SuperDude', strength: 55}
    ];

    mockHeroService = jasmine.createSpyObj(['addHero', 'getHeroes', 'deleteHero']);
    component = new HeroesComponent(mockHeroService);
  });

  describe('deleteHero', () => {
    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;

      component.deleteHero(HEROS[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('should call deleteHero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROS;

      component.deleteHero(HEROS[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROS[2]); //{id: 3, name: 'SuperDude', strength: 55});
    });
  });
});
