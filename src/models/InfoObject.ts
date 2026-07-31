import {LicenseObject} from "./LicenseObject"
import { ContactObject } from "./ContactObject";

export interface InfoObject{
    title: string; //REQUIRED - Title of the API
    summary?: string; //Short summary of the API
    description?: string; //Description of the API - CommonMark may be used for rich text representation
    termsOfService?: string; //A URI for the ToS of the API - MUST be a URI
    contact?: ContactObject; //Contact info for the exposed API
    license?: LicenseObject; //License info for the exposed API
    version: string; //REQUIRED - Version of the OpenAPI Document (Not the OpenAPI Specification Version)
}

export class InfoObject{
    title: string;
    summary: string;
    description: string;
    termsOfService: string;
    contact: ContactObject;
    license: LicenseObject;
    version: string;

    public static readonly example: InfoObject = new InfoObject(
        "Example API Title",
        "0.0.0",
        "This is an API Specification example summary for testing purposes",
        "This is a more in-depth description of the example API. Again, this is for testing purposes only :(",
        "There are no terms of service to a demo API that doesn't exist :)",
        ContactObject.example,
        LicenseObject.example,
    )

    constructor(
        title: string,
        version: string,
        summary: string = "",
        description: string = "",
        termsOfService: string = "", 
        contact: ContactObject = new ContactObject(),
        license: LicenseObject,
    ){
        this.title = title;
        this.summary = summary;
        this.description = description;
        this.termsOfService = termsOfService;
    }
}