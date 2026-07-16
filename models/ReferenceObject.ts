export interface ReferenceObject {
    $ref: string; //REQUIRED - MUst be a URI
    summary?: string; //Short summary which SHOULD override the referenced component
    description?: string; //Description which SHOULD override the referenced component
}