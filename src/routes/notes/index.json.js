const { getNotes } = require("./_read_posts");

export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const notes = await getNotes();

    res.end(JSON.stringify(notes))
}
