import { ExampleObject } from "./ExampleObject";
import { ReferenceObject } from "./ReferenceObject";
import { SchemaObject } from "./SchemaObject";

export class MediaTypeObject{
    constructor(
        public schema: SchemaObject,
        public example: any,
        public examples: Map<string, (ExampleObject | ReferenceObject)>,
        //public encoding: Map<string, EncodingObject>
    ){}
}