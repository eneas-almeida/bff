import { LogEntity } from './log.entity';

describe('Log unit tests', () => {
    it('...', () => {
        expect(() => {
            new LogEntity(null, null, null, null, null);
        }).toThrowError('request inválido');
    });
});
