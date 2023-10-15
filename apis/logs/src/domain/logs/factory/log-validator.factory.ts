import { LogsEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';
import { LogYupValidator } from '../validator/log.validator';

export class LogValidatorFactory {
    static create(): ValidatorInterface<LogsEntityInterface> {
        return new LogYupValidator();
    }
}
