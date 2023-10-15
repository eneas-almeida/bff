import { LogsEntity } from './logs.entity';

describe('Log unit tests', () => {
    it('...', () => {
        expect(() => {
            new LogsEntity(null, null, null, null, null, null, null);
        }).toThrowError('request inválido');
    });
});
