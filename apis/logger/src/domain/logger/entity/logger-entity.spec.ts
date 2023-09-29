import { LoggerEntity } from './logger.entity';

describe('Logger unit tests', () => {
    it('...', () => {
        expect(() => {
            new LoggerEntity(null, 'users api', 'k012k3123', '{}', '{}');
        }).toThrowError('request inválido');
    });

    it('...', () => {
        expect(() => {
            new LoggerEntity(null, 'users api', 'k012k3123', '{}', '{}');
        }).toThrowError('request inválido');
    });
});
