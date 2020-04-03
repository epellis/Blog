import { MarkdownParser } from "../../md_transpiler/parser";

export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const parser = new MarkdownParser();
    const files = await parser.getFiles("notes", ".md")
    const contents = Promise.all(files.map(path => parser.readFile(`notes/${path}`)))
    const notes = (await contents).map(content => parser.parse(content))

    res.end(JSON.stringify(notes))
}
