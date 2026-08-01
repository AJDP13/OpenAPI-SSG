import { HeaderObject } from "./HeaderObject";
import { MediaTypeObject } from "./MediaTypeObject";
import { ReferenceObject } from "./ReferenceObject";

export class ResponseObject{
    constructor(
        public description: string,
        public headers?: Map<string, (HeaderObject|ReferenceObject)>,
        public content?: Map<string, MediaTypeObject>
    ){}
}