export class HeaderObject{
    constructor(
        public required: boolean = false,
        public deprecated: boolean = false,
        public description?: string,
    ){}
}