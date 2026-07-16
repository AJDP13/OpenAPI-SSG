export interface ServerVariableObject {
    enum: string[]; //Enumeration of string values to be used if substitution options are from a limited set. Array MUST NOT be empty
    default: string; //REQUIRED - Default value to use for substitution which SHALL be sent if an alternate value is not supplied
    description: string; //Optional Description for the server variable. CommonMark syntax MAY be used for rich text representation
}