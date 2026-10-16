const MAX_ATTEMPTS = 6;

export function apiKey(name) {
    const key = process.env[name];
    if (!key) throw new Error(`${name} missing in .env`);
    return key;
}

const sleep = seconds =>
    new Promise(resolve => setTimeout(resolve, seconds * 1000));

export async function post(url, headers, body) {
    for (let attempt = 1; ; attempt++) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json', ...headers },
            body: typeof body === 'string' ? body : JSON.stringify(body),
        });
        if (response.ok) return response;
        const text = await response.text();
        const retryable = response.status === 429 || response.status >= 500;
        if (!retryable || attempt === MAX_ATTEMPTS) {
            throw new Error(`${response.status}: ${text.slice(0, 300)}`);
        }
        const retryAfter = Number(
            /retry in (\d+(?:\.\d+)?)s/i.exec(text)?.[1] ??
                response.headers.get('retry-after') ??
                0
        );
        await sleep(Math.max(retryAfter, 2 * attempt) + 1);
    }
}
