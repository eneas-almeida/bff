import { Id, LogEntityInterface } from '@/domain/@shared/contracts';
import { EntityAbstract } from '@/domain/@shared/entity';
import { LogValidatorFactory } from '../factory';

export class LogEntity extends EntityAbstract implements LogEntityInterface {
    private _origin: string;
    private _key: string;
    private _request: string;
    private _response: string;

    constructor(id: Id, origin: string, key: string, request: string, response: string) {
        super(id);
        this._origin = origin;
        this._key = key;
        this._request = request;
        this._response = response;
        this.validate();
    }

    get origin(): string {
        return this._origin;
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

    setOrigin(value: string): void {
        this._origin = value;
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
        LogValidatorFactory.create().validate(this);
    }
}
