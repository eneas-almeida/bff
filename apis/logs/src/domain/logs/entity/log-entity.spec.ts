import { LogEntity } from './log.entity';

describe('Log unit tests', () => {
    it('...', () => {
        expect(() => {
            new LogEntity(null, 'logs api', 'k012k3123', '{}', '{}');
        }).toThrowError('request inválido');
    });

    it('...', () => {
        expect(() => {
            new LogEntity(null, 'logs api', 'k012k3123', '{}', '{}');
        }).toThrowError('request inválido');
    });
});
