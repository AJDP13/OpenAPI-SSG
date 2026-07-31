import { PathItemObject } from "./PathItemObject"

// export type PathsObject = Record<string, PathItemObject>

export class PathsObject{

    private items: Record<string, PathItemObject> = {};

    public add(path: string, item: PathItemObject): void{
        if(!path.startsWith("/")){
            throw new Error("OpenAPI Path must start with '/'.");
        }

        this.items[path] = item;
    }

    public get(path: string): PathItemObject | undefined {
        return this.items[path];
    }

    public has(path: string): boolean {
        return path in this.items;
    }

    public entries(){
        return Object.entries(this.items);
    }

    public toJSON(){
        return this.items;
    }
}