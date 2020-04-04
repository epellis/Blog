import { MarkdownParser } from "../../md_transpiler/parser";

const cache = new Map()

// const parser = new MarkdownParser();
// const files = await parser.getFiles("notes", ".md")
// const contents = await Promise.all(files.map(path => parser.readFile(`notes/${path}`)))
// const notes = await Promise.all(contents.map(content => parser.parse(content)))

export async function get(req, res) {
    const { slug } = req.params;

    // If cache hit, serve markdown directly
    if (cache.has(slug)) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.end(JSON.stringify(cache.get(slug)))
        return;
    }

    const parser = new MarkdownParser();

    // Try to find the file
    const filename = `notes/${slug}`;
    if (!parser.findFile(filename)) {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: `Not found`
        }));
        return;
    }

    // Parse and cache the file
    const contents = await parser.readFile(filename)
    const note = await parser.parse(filename, contents)

    cache.set(slug, note);

    res.end(JSON.stringify(note))
}
