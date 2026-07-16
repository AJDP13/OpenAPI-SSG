import { ExampleObject } from "./ExampleObject";
import { Referencable } from "./Referencable";

export enum ParameterObjectInString {
    QUERY = "query",
    QUERYSTRING = "querystring",
    HEADER = "header",
    PATH = "path",
    COOKIE = "cookie"
}

export interface ParameterObject {
    name: string; //REQUIRED - case-sensitive parameter name,
    in: ParameterObjectInString; //REQUIRED
    description: string; //Brief description of the parameter
    required?: boolean; //Determines if the param is mandatory
    deprecated: boolean; //Specifies if the parameter is deprecated
    allowEmptyValue: boolean; //if true, client MAY pass zero-length string value in place of parameters that would otherwise entirely be omitted
    example: any,
    examples: Record<string, Referencable<ExampleObject>>
}