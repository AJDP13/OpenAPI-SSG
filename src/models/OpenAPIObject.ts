import { InfoObject } from "./InfoObject";
import { PathsObject } from "./PathsObject";
import { ServerObject } from "./ServerObject";

// export interface OpenAPIObject{
//     openapi: string; //Must be the version number of the OpenAPI Spec the document uses
//     $self: string; //Self-assigned URI of the document
//     info: InfoObject; //REQUIRED: Provides metadata about the API
//     jsonSchemaDialect: string; //default value for the $schema keyword within SchemaObjects. Must be a URI
// }

export class OpenAPIObject{

    public static readonly example: OpenAPIObject = new OpenAPIObject(
        "3.1.0",
        "",
        InfoObject.example,
        ""
    )

    constructor(
        public openapi: string,
        public info: InfoObject,
        public jsonSchemaDialect?: string,
        public servers?: ServerObject[],
        public paths?: PathsObject
    ){}
}