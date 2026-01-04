import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';

function getScreenshotOneUrl(options: any, accessKey = 'XBhBsnzjDC2xGQ', secretKey = 'sdRgqQmHPxRrrw') {
    const baseUrl = 'https://api.screenshotone.com/take';
    const params = new URLSearchParams();
    params.append('access_key', accessKey);
    for (const [key, value] of Object.entries(options)) {
        if (value !== undefined) params.append(key, String(value));
    }
    params.sort();
    const signature = crypto.createHmac('sha256', secretKey).update(params.toString()).digest('hex');
    return `${baseUrl}?${params.toString()}&signature=${signature}`;
}

const targetUrl = 'https://www.klinikaurora.com.my/';
const downloadsDir = path.join(process.cwd(), 'temp_screenshots'); // Creates this temporary folder relative to where you run it

if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir);
}

const images = [
    {
        name: 'mobile_full.webp',
        options: {
            url: targetUrl,
            viewport_width: 390,
            viewport_height: 844,
            device_scale_factor: 2,
            user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
            block_ads: true,
            block_cookie_banners: true,
            block_banners_by_heuristics: false,
            block_trackers: true,
            delay: 0,
            timeout: 60,
            response_type: 'by_format',
            full_page: false, // full_page can be unstable on mobile viewports
            image_quality: 80,
            format: 'webp'
        }
    },
    {
        name: 'desktop_full.webp',
        options: {
            url: targetUrl,
            viewport_width: 1920,
            viewport_height: 1080,
            device_scale_factor: 1, // Standard for desktop full page to keep size manageable
            block_ads: true,
            block_cookie_banners: true,
            block_banners_by_heuristics: false,
            block_trackers: true,
            delay: 0,
            timeout: 60,
            response_type: 'by_format',
            full_page: true,
            image_quality: 80,
            format: 'webp'
        }
    }
];

async function downloadImage(url: string, filepath: string) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                let data = '';
                response.on('data', (chunk) => data += chunk);
                response.on('end', () => {
                    reject(new Error(`Failed to download: ${response.statusCode} - ${data}`));
                });
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(true);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => { });
            reject(err);
        });
    });
}

async function main() {
    console.log('Generating URLs with new parameters...');
    for (const img of images) {
        const url = getScreenshotOneUrl(img.options);
        console.log(`Generated URL for ${img.name}: ${url}`);
        const filepath = path.join(downloadsDir, img.name);
        console.log(`Downloading ${img.name}...`);
        try {
            await downloadImage(url, filepath);
            console.log(`Saved to ${filepath}`);
        } catch (error) {
            console.error(`Error downloading ${img.name}:`, error);
        }
    }
    console.log('Done.');
}

main();
