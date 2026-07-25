import { OpenAPIParser } from "../src/parsers/OpenAPIParser"

const parser = new OpenAPIParser()

const api = await parser.parseFile("./tests/example.json");


