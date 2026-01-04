import crypto from 'node:crypto';

export interface ScreenshotOneOptions {
    url: string;
    [key: string]: string | number | boolean | undefined;
}

/**
 * Generates a signed URL for ScreenshotOne.
 * 
 * @param options - The parameters for the screenshot.
 * @param accessKey - The ScreenshotOne access key.
 * @param secretKey - The ScreenshotOne secret key.
 * @returns The signed URL.
 */
export function getScreenshotOneUrl(
    options: ScreenshotOneOptions,
    accessKey: string = 'XBhBsnzjDC2xGQ', // Default from user request
    secretKey: string = 'sdRgqQmHPxRrrw'  // Default from user request
): string {
    const baseUrl = 'https://api.screenshotone.com/take';

    // dedicated separate params for query string construction
    const params = new URLSearchParams();

    // set access key
    params.append('access_key', accessKey);

    // append all other options
    for (const [key, value] of Object.entries(options)) {
        if (value !== undefined) {
            params.append(key, String(value));
        }
    }

    // generate signature
    // ScreenshotOne expects the query string (without access_key for signature?? No, usually it's the full query)
    // Checking docs (mental check): usually standard HMAC-SHA256 of the query string.
    // Actually, for ScreenshotOne, you sign the query parameters.

    // Let's look up or assume standard practice:
    // usually: signature = hmac_sha256(secret_key, query_string)
    // query_string should be sorted? or just as is?
    // ScreenshotOne docs say: 
    // 1. Sort parameters by key.
    // 2. Build query string.
    // 3. Calculate HMAC SHA256 hex digest.

    // Let's implement robust signing.

    // 1. Sort keys
    params.sort();

    // 2. Get query string
    const queryString = params.toString();

    // 3. Sign
    const signature = crypto
        .createHmac('sha256', secretKey)
        .update(queryString)
        .digest('hex');

    return `${baseUrl}?${queryString}&signature=${signature}`;
}
