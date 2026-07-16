import { InfoObject } from "./InfoObject";

export interface OpenAPIObject{
    openapi: string; //Must be the version number of the OpenAPI Spec the document uses
    $self: string; //Self-assigned URI of the document
    info: InfoObject; //REQUIRED: Provides metadata about the API
    jsonSchemaDialect: string; //default value for the $schema keyword within SchemaObjects. Must be a URI
}