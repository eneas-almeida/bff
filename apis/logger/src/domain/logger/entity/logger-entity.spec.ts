import { LoggerEntity } from './logger.entity';

describe('Logger unit tests', () => {
    it('...', () => {
        expect(() => {
            new LoggerEntity(null, 'kl1203dd', '{}', '{}');
        }).toThrowError('request inválido');
    });

    it('...', () => {
        expect(() => {
            new LoggerEntity(null, 'kl1203dd', '{}', '{}');
        }).toThrowError('request inválido');
    });
});
