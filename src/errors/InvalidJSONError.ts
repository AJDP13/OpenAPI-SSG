export class InvalidJSONError extends Error{
    constructor(message: string, cause?: any) {
        super(message);
        this.name = "InvalidJSON";
        this.cause = cause

        Object.setPrototypeOf(this, InvalidJSON.prototype)
    }
}