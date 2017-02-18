/* test the test harnes :( */
import testHarness from './testHarness';

 describe('testHarness', () => {    

    it('should have matches, addListener and removeListener', () => {
      expect(testHarness).toBeDefined();
      expect(testHarness().matches).toBeDefined();
      expect(testHarness().addListener).toBeDefined();
      expect(testHarness().removeListener).toBeDefined();
      expect(testHarness().addListener()).toBeDefined();
      expect(testHarness().removeListener()).toBeDefined();
    });
  });