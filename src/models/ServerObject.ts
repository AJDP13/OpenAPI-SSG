import { ServerVariableObject } from "./ServerVariableObject";

export interface ServerObject{
    url: string; //REQUIRED - URL to target host. Support server variables and MAY be relative, to indicate host location is relative to document location. QUery and fragment MUST NOT be part of this URL. Variable substitutions will be made when a variable is named in {braces}
    description?: string; //Optional - String to describe the host designated by the URL. CommonMark syntax MAY be used for rich text representation
    name?: string; //Optional - Unique string to refer to hose designated by the URL
    variables?: Record<string, ServerVariableObject>; 
}