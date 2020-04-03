const marked = require("marked");
const fs = require("fs");
const util = require("util");
const globby = require("globby");

const readFile = util.promisify(fs.readFile);

async function readDirectory(globLocation) {
    const paths = await globby([globLocation]);
    const contents = Promise.all(paths.map(path => readFile(path, 'utf8')));
    return contents;
}

function parseMarkdown(fileContents) {
    const parsed = fileContents.map(contents => marked(contents));
    return parsed;
}

// Return a list of all posts
export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    let fileContents = await readDirectory("../../../static/notes/*.md")
    console.log(`File Contents: ${fileContents}`);

    let markdownContents = parseMarkdown(fileContents)
    console.log(`MD Contents: ${markdownContents}`);

    res.end(JSON.stringify(markdownContents));
}
