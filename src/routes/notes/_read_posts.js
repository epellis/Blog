const marked = require("marked");
const fs = require("fs");
const path = require("path");
const util = require("util");

const readDir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

async function readDirectory(dir, extension) {
    let paths = await readDir(dir)
    paths = paths.filter(file => path.extname(file) === extension)
    const contents = Promise.all(paths.map(path => readFile(dir + "/" + path, 'utf8')));
    return contents;
}

function parseMarkdown(fileContents) {
    const parsed = fileContents.map(contents => marked(contents));
    return parsed;
}

export async function getNotes() {
    let fileContents = await readDirectory("notes", ".md")
    let markdownContents = parseMarkdown(fileContents)

    return markdownContents;
}
