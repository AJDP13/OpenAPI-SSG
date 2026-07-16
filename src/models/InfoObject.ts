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