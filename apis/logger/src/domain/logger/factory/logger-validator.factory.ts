import { LoggerEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';
import { LoggerYupValidator } from '../validator';

export class LoggerValidatorFactory {
    static create(): ValidatorInterface<LoggerEntityInterface> {
        return new LoggerYupValidator();
    }
}
