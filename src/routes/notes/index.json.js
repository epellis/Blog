import { MarkdownParser } from "../../md_transpiler/parser";

export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const parser = new MarkdownParser();
    const files = await parser.getFiles("notes", ".md")
    // const contents = await Promise.all(files.map(path => { return { contents: parser.readFile(`notes/${path}`), path: path } }))
    let contents = [];
    for (const file of files) {
        const parsedFile = await parser.readFile(`notes/${file}`);
        contents.push({ contents: parsedFile, path: file })
    }

    const notes = await Promise.all(contents.map(content => parser.parse(content.path, content.contents)))

    res.end(JSON.stringify(notes))
}
