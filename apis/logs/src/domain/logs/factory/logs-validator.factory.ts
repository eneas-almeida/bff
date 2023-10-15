import { LogsEntityInterface, ValidatorInterface } from '@/domain/@shared/contracts';
import { LogsYupValidator } from '../validator/logs.validator';

export class LogsValidatorFactory {
    static create(): ValidatorInterface<LogsEntityInterface> {
        return new LogsYupValidator();
    }
}
