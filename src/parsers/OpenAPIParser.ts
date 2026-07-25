import {OpenAPIObject} from "../models/OpenAPIObject";
import {InfoObject} from "../models/InfoObject";
import { ServerObject } from "../models/ServerObject";
import {PathsObject} from "../models/PathsObject";
import { PathItemObject } from "../models/PathItemObject";
import { OperationObject } from "../models/OperationObject";

export class OpenAPIParser{

    public parse(contents: string): OpenAPIObject{
        try{
            const data = JSON.parse(contents);
            const api: OpenAPIObject = {
                openapi: "Unkown Version",
                $self: "",
                info: {
                    
                }
            }

            const api: OpenAPIObject = {
                openapi: data.openapi,
                $self: data['$self']
            }
        }catch(error){
            throw new Error("Provided data was not a valid JSON object")
        }
        
    }

    public parseFile(file: string): Promise<OpenAPIObject> {
        //Open file then call this.parse function
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

    private parsePaths(data: unknown): PathsObject {

    }

    private parsePathItem(data: unknown): PathItemObject{

    }

    private parseOperation(data: unknown): OperationObject{

    }

    private isObject(data: unknown): boolean{
        return (typeof data === "object" && data !== null);
    }
}