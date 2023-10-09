import { v4 as uuidv4 } from 'uuid';
import { Notification } from '..';

export abstract class EntityAbstract {
    protected _id: string;
    protected _createdAt: Date;
    protected _notification: Notification;

    constructor(id: string) {
        this._id = id || uuidv4();
        this._createdAt = new Date();
        this._notification = new Notification();
    }

    get id(): string {
        return this._id;
    }

    setId(value: string): void {
        this._id = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    setCreatedAt(value: Date): void {
        this._createdAt = value;
    }

    get notification(): Notification {
        return this._notification;
    }
}
