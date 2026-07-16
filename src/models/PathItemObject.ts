export interface PathItemObject {
    $ref?: string; //Allows referenced defintition to this path item. MUST be a URI
    summary?: string; //OPTIONAL - String summary intended to apply to all operations in this path
    description?: string; //OPTINAL - String description, inteded to apply to all operations in this path
    
}