import { LogEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';
import { LogYupValidator } from '../validator';

export class LogValidatorFactory {
    static create(): ValidatorInterface<LogEntityInterface> {
        return new LogYupValidator();
    }
}
