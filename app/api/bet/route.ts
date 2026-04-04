import { readFileSync } from "node:fs";

export async function GET(
    _: Request,
) {
    const file = await readFileSync(process.cwd() + '/app/shared/data/matches-today.json', 'utf8');
    const data = JSON.parse(file);
    return Response.json(data)
}