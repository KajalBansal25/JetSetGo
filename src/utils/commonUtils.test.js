import 'react-native';
import sum from './commonUtil';

describe('Sum', () => {
  it('if we pass 2 number so result should be right', () => {
    expect(sum(2, 3)).toBe(5);
  });
    it('when user passes wrong argumnet', () => {
    expect(sum("2", "3")).toBe('wrong arguments');
  });
});
