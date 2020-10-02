import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HerosComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHerosService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SpiderDude', strength: 55 }
    ]

    mockHerosService = jasmine.createSpyObj(['addHero', 'getHeroes', 'deleteHero']);

    component = new HeroesComponent(mockHerosService);
  })

  describe('delete', () => {
    it('should remove the indicated hero from the heroes list', () => {
      mockHerosService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toEqual(2);
    })
  })
})
