export interface ExampleObject {
    summary?: string; //Short description
    description?: string; //Long description
    dataValue?: any; //Example of the data structure that MUST be valid according to relevant SchemaObject. If dataValue is present, value MUST be absent
    serializedValue?: string; //
    externalValue?: string;
    value?: any;
}