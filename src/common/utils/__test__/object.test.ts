import { isObjectEmpty } from '../objects';

describe('Object utils test suite', () => {
  describe('isObjectEmpty function test suite', () => {
    it('Shpuld return true if object is empty', () => {
      const result = isObjectEmpty({});
      expect(result).toBeTruthy();
    });
    it('Shpuld return false if object is not empty', () => {
      const result = isObjectEmpty({ name: 'test' });
      expect(result).toBeFalsy();
    });
  });
});
