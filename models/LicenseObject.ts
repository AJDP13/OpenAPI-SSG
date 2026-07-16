export interface LicenseObject{
    name: string; //REQUIRED - License name used for the API
    identifier: string; //SPDX-Licenses expression for the API - mutually exclusive of the URL Field
    url: string; //A URI for the license used for the API. MUST be a URI - Mutually exclusive of the identifier field
}