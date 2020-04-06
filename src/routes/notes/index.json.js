import { MarkdownParser } from "../../md_transpiler/parser";

export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const parser = new MarkdownParser();
    const files = await parser.getFiles("content/notes", ".md")
    let contents = [];
    for (const file of files) {
        const parsedFile = await parser.readFile(`content/notes/${file}`);
        contents.push({ contents: parsedFile, path: file })
    }

    const notes = await Promise.all(contents.map(content => parser.parse(content.path, content.contents)))

    res.end(JSON.stringify(notes))
}
