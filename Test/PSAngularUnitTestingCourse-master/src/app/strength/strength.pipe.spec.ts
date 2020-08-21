import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should dispaly weak is strength is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should dispaly strong is strength is 10', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10 (strong)');
  });
})
