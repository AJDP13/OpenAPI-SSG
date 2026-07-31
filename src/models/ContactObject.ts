// export interface ContactObject{
//     name?: string; //Identifying name of the contact person/org
//     url?: string; //URI for contact info. MUST be a URI
//     email?: string; //Email address of contact person/origin. MUST be email address
// }

export class ContactObject{
    name: string;
    url: string;
    email: string;

    public static readonly example: ContactObject = new ContactObject(
        "Arun Dutta-Plummer",
        "https://aerotrixlabs.com",
        "arun@aerotrixlabs.com"
    )

    constructor(
        name: string = "",
        url: string = "",
        email: string = ""
    ){
        this.name = name;
        this.url = url;
        this.email = email
    }
}