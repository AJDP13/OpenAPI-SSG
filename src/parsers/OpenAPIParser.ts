import {OpenAPIObject} from "../models/OpenAPIObject";
import {InfoObject} from "../models/InfoObject";
import { ServerObject } from "../models/ServerObject";
import {PathsObject} from "../models/PathsObject";
import { PathItemObject } from "../models/PathItemObject";
import { OperationObject } from "../models/OperationObject";

export class OpenAPIParser{

    public parse(contents: string): OpenAPIObject{

    }

    public parseFile(file: string): Promise<OpenAPIObject> {

    }

    private parseInfo(data: unknown): InfoObject{
        return {
            title: "",
            version: ""
        }
    }

    private parseServers(data: unknown): ServerObject[] {

    }

    private parsePaths(data: unknown): PathsObject {

    }

    private parsePathItem(data: unknown): PathItemObject{

    }

    private parseOperation(data: unknown): OperationObject{

    }
}