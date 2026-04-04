import { readFileSync } from "fs";

export async function GET(
    _: Request,
) {
    const file = await readFileSync(process.cwd() + '/app/shared/data/bets-me.json', 'utf8');
    const data = JSON.parse(file);
    return Response.json(data)
}