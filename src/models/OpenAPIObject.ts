import { InfoObject } from "./InfoObject";

export interface OpenAPIObject{
    openapi: string; //Must be the version number of the OpenAPI Spec the document uses
    $self: string; //Self-assigned URI of the document
    info: InfoObject; //REQUIRED: Provides metadata about the API
    jsonSchemaDialect: string; //default value for the $schema keyword within SchemaObjects. Must be a URI
}

export class OpenAPIObject{
    openapi: string;
    $self: string;
    info: InfoObject;
    jsonSchemaDialect: string;

    public static readonly example: OpenAPIObject = new OpenAPIObject(
        "3.1.0",
        "",
        InfoObject.example,
        ""
    )

    constructor(
        openapi: string,
        $self: string,
        info: InfoObject,
        jsonSchemaDialect: string
    ){
        this.openapi = openapi;
        this.$self = $self;
        this.info = info;
        this.jsonSchemaDialect = jsonSchemaDialect
    }
}