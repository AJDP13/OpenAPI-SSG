export interface LicenseObject{
    name: string; //REQUIRED - License name used for the API
    identifier: string; //SPDX-Licenses expression for the API - mutually exclusive of the URL Field
    url: string; //A URI for the license used for the API. MUST be a URI - Mutually exclusive of the identifier field
}

export class LicenseObject{
    name: string;
    identifier: string;
    url: string;

    public static readonly example: LicenseObject = new LicenseObject(
        "License",
        "",
        ""
    );

    constructor(
        name: string,
        identifier: string,
        url: string
    ){
        this.name = name;
        this.identifier = identifier;
        this.url = url;
    }
}