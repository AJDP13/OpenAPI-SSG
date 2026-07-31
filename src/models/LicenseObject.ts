// export interface LicenseObject{
//     name: string; //REQUIRED - License name used for the API
//     identifier: string; //SPDX-Licenses expression for the API - mutually exclusive of the URL Field
//     url: string; //A URI for the license used for the API. MUST be a URI - Mutually exclusive of the identifier field
// }

export class LicenseObject{
    public static readonly example: LicenseObject = new LicenseObject(
        "License",
        "",
        ""
    );

    constructor(
        public name: string,
        public identifier?: string,
        public url?: string
    ){

        //identifier and url fields are mutually exclusive - Implement check
        if(identifier && url){
            throw new Error("Cannot define both identifier and url attributes in a License O")
        }else if(identifier){ //idenfitifer must be an SPDX-Licenses Expression
            //validate SPDX-Licenses Expressions
        }else if(url){ //url must be in the form of a URI
            //validate URI here
        }

    }
}