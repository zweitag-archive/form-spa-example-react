import getNextId, { resetId } from './getNextId';

describe('getNextId helper', () => {
    beforeEach(() => {
        resetId();
    });
    it('should start at 1', () => {
        const nextId = getNextId();

        expect(nextId).toEqual(1);
    });
    it('should increment', () => {
        const firstId = getNextId();
        const secondId = getNextId();

        expect(firstId).toEqual(1);
        expect(secondId).toEqual(2);
    });
});
