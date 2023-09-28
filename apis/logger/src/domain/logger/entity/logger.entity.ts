import { Id, LoggerEntityInterface } from '@/domain/@shared/contracts';
import { EntityAbstract } from '@/domain/@shared/entity';
import { LoggerValidatorFactory } from '../factory';

export class LoggerEntity extends EntityAbstract implements LoggerEntityInterface {
    private _key: string;
    private _request: string;
    private _response: string;

    constructor(id: Id, key: string, request: string, response: string) {
        super(id);
        this._key = key;
        this._request = request;
        this._response = response;
        this.validate();
    }

    get key(): string {
        return this._key;
    }

    get request(): string {
        return this._request;
    }

    get response(): string {
        return this._response;
    }

    setKey(value: string): void {
        this._key = value;
    }

    setRequest(value: string): void {
        this._request = value;
    }

    setResponse(value: string): void {
        this._response = value;
    }

    validate() {
        LoggerValidatorFactory.create().validate(this);
    }
}
