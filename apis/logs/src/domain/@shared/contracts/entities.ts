import { Notification } from '..';

export interface LogsEntityInterface {
    get id(): string;
    get origin(): string;
    get key(): string;
    get type(): string;
    get code(): string;
    get request(): string;
    get response(): string;
    get createdAt(): Date;
    get notification(): Notification;

    setId(value: string): void;
    setOrigin(value: string): void;
    setKey(value: string): void;
    setType(value: string): void;
    setCode(value: string): void;
    setRequest(value: string): void;
    setResponse(value: string): void;
    setCreatedAt(value: Date): void;
    validate(): void;
}
