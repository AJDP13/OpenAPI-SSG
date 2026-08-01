import { MediaTypeObject } from "./MediaTypeObject";

export class RequestBodyObject{
    constructor(
        public content: Map<string, MediaTypeObject>,
        public required: boolean = false,
        public description?: string
    ){}
}