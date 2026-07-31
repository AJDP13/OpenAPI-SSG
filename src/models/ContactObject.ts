// export interface ContactObject{
//     name?: string; //Identifying name of the contact person/org
//     url?: string; //URI for contact info. MUST be a URI
//     email?: string; //Email address of contact person/origin. MUST be email address
// }

/**
 * OpenAPI 3.1 Contact Object
 * 
 * Required fields: none
 * Specification: §4.x.x Contact Object
 */

export class ContactObject{
    public static readonly example: ContactObject = new ContactObject(
        "Arun Dutta-Plummer",
        "https://aerotrixlabs.com",
        "arun@aerotrixlabs.com"
    )

    constructor(
        public name?: string,
        public url?: string,
        public email?: string
    ){}
}