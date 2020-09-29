import { uuid } from '../index';

describe('Module: medical-uuid', () => {
  describe('uuid', () => {
    it('should generate a uuid', () => {
      expect(uuid()).toMatch(/^[a-zA-Z0-9]+-[a-zA-Z0-9]+$/g);
    });
    it('should generate a uuid of given length', () => {
      expect(uuid(3)).toMatch(/^[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+$/g);
    });
    it('should generate a uuid of given length with a number appended', () => {
      expect(uuid(3, true)).toMatch(/^[a-zA-Z0-9]+-[a-zA-Z0-9]+-[a-zA-Z0-9]+-[0-9]{4}$/g);
    });
  });
});
