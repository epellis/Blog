import * as fm from "front-matter";
import fs from "fs";
import util from "util";
import path from "path";

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

export class MarkdownParser {
    // Get all files from the directory matching the extension
    async getFiles(dirlocation, extension) {
        let paths = await readDir(dirlocation)
        paths = paths.filter(file => path.extname(file) === extension)
        return paths
    }

    // Read the contents of a file and return them
    async readFile(filelocation) {
        const contents = await readFile(filelocation, 'utf8')
        return contents
    }

    // Parse the contents
    parse(contents) {
        let { attributes, body } = fm(contents)

        return {
            title: attributes.title,
            slug: encodeURIComponent(attributes.title),
            preview: "",
            date: new Date(attributes.date),
            ast: {}
        }
    }
}
