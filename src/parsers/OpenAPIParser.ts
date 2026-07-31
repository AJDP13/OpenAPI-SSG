import {OpenAPIObject} from "../models/OpenAPIObject";
import {InfoObject} from "../models/InfoObject";
import { ServerObject } from "../models/ServerObject";
import {PathsObject} from "../models/PathsObject";
import { PathItemObject } from "../models/PathItemObject";
import { OperationObject } from "../models/OperationObject";
import { InvalidJSONError } from "../errors/InvalidJSONError";

export class OpenAPIParser{

    public parse(contents: string): OpenAPIObject{
        const data = JSON.parse(contents);

        const APIObject: OpenAPIObject = {
            openapi: data.openapi ?? "Unknown",
            $self: data['$self'] ?? "Unknown",
            info: this.parseInfo(data.info),
            jsonSchemaDialect: data.jsonSchemaDialect ?? "Unknown"
        }

        return APIObject
    }

    public async parseFile(file: string): Promise<OpenAPIObject> {

    }

    private parseInfo(data: unknown): InfoObject{
        const info: InfoObject = {
            title: "Error - Unknown",
            version: "Error - Unknown"
        }

        if(!this.isObject(data)){
            //InfoObject is not a valid JSON Object - Log the error and continue
            return info;
        }

        const object = data as Record<string, unknown>;

        if(typeof object.title !== 'string'){
            //InfoObject.title should be a valid string
        }else{
            info.title = object.title
        }

        if(typeof object.version !== 'string'){
            //InfoObject.version should be a valid string
        }else{
            info.version = object.version
        }


        return info;
    }

    private parseServers(data: unknown): ServerObject[] {

    }

    private parsePaths(data: Record<string, any>): PathsObject {

        /*
            Takes a JS Object and attempts to convert it into a PathsObject type
        */

        const path_strings = Object.keys(data)

        const paths: PathsObject = {}

        for(const path_name of path_strings){
            if(path_name[0] != "/"){
                //Add to error log as path should start with '/'
            }

            const path_object = data[path_name]

            if(!this.isObject(path_object)){
                //Add to error log since value to path key must be an object
                continue; //Skip this path now
            }

            const path: PathsObject = {

            }

            paths.push(this.parsePathItem(path_object as object))
        }
    }

    private parsePathItem(data: unknown): PathItemObject{

    }

    private parseOperation(data: unknown): OperationObject{

    }

    private isObject(data: unknown): boolean{
        return (typeof data === "object" && data !== null);
    }
}