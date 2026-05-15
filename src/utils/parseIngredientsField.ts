/**
 * Parse clinic product `ingredients` from DB.
 *
 * - **Canonical**: valid JSON array string, e.g. `["AQUA / WATER","GLYCERIN"]`
 *   (what `JSON.stringify(string[])` produces).
 * - **Legacy**: Python/JS-literal style with single quotes, e.g.
 *   `['AQUA / WATER','GLYCERIN']` — not valid JSON, so `JSON.parse` fails.
 */
export function parseIngredientsList(raw: string | null | undefined): string[] {
  if (raw == null) return [];
  const trimmed = String(raw).trim();
  if (!trimmed) return [];

  try {
    const parsed = JSON.parse(trimmed) as unknown;
    if (Array.isArray(parsed)) {
      return parsed.map((x) => String(x).trim()).filter(Boolean);
    }
  } catch {
    // fall through — legacy / malformed
  }

  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return [];
    const singleQuoted = /'((?:\\'|[^'])*)'/g;
    const out: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = singleQuoted.exec(inner)) !== null) {
      out.push(m[1].replace(/\\'/g, "'"));
    }
    if (out.length > 0) return out;
  }

  return trimmed
    .split(',')
    .map((s) => s.trim().replace(/^['"[]+|['"\]]+$/g, ''))
    .filter(Boolean);
}

/** Same storage as ingredients (`JSON.stringify` of string[] in API). */
export function formatIngredientLikeListForDisplay(
  raw: string | null | undefined,
  separator = ', '
): string {
  const list = parseIngredientsList(raw);
  return list.length ? list.join(separator) : '';
}
