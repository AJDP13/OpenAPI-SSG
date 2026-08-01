import { ParameterObject } from "./ParameterObject";
import { ReferenceObject } from "./ReferenceObject";
import { RequestBodyObject } from "./RequestBodyObject";

// export interface OperationObject {
//     tags: string[]; //List of tags for API documentation control
//     summary: string; //Short summary of what the operation does
//     description: string; //Verbose explanation of the operation behaviour
//     // externalDocs: ExternalDocumentationObject; //Additional external documentation
//     operationId: string; //Unique string to identify the operatin. ID MUST be unique among all operations described in the API. This is case-sensitive
//     parameters: ParameterObject | ReferenceObject
// }

export class OperationObject{
    constructor(
        public summary?: string,
        public description?: string,
        public operationId?: string,
        public parameters?: (ParameterObject|ReferenceObject)[],
        public requestBody?: (RequestBodyObject | ReferenceObject),

    ){}
}