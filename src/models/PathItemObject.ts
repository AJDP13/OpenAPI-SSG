import { OperationObject } from "./OperationObject";
import {ServerObject} from "./ServerObject"
import { ParameterObject } from "./ParameterObject";

// export interface PathItemObject {
//     $ref?: string; //Allows referenced defintition to this path item. MUST be a URI
//     summary?: string; //OPTIONAL - String summary intended to apply to all operations in this path
//     description?: string; //OPTINAL - String description, inteded to apply to all operations in this path
//     get?: OperationObject;
//     put?: OperationObject;
//     post?: OperationObject;
//     delete?: OperationObject;
//     options?: OperationObject;
//     head?: OperationObject;
//     patch?: OperationObject;
//     trace?: OperationObject;
//     query?: OperationObject;
//     additionalOperations?: Record<string, OperationObject>;
//     servers?: ServerObject[];
//     parameters?: Referencable<ParameterObject>[];
// }


export class PathItemObject{
    public $ref?: string;
    public summary?: string;
    public description?: string;
    public get?: OperationObject;
    public put?: OperationObject;
    public post?: OperationObject;
    public delete?: OperationObject;
    public options?: OperationObject;
    public head?: OperationObject;
    public patch?: OperationObject;
    public trace?: OperationObject;
    public parameters: ParameterObject[] = [];
    public servers: ServerObject[] = [];
}