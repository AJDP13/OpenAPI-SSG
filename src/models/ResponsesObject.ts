import { ReferenceObject } from "./ReferenceObject";
import { ResponseObject } from "./ResponseObject";

export class ResponsesObject{
    public default: ResponseObject | ReferenceObject

    constructor(
        _default: ResponseObject | ReferenceObject
    ){
        this.default = _default
    }
}