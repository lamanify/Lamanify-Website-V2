import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { v2 as cloudinary } from "npm:cloudinary@1.41.3";
import { crypto } from "https://deno.land/std@0.177.0/crypto/mod.ts";

// Configuration
const SCREENSHOTONE_ACCESS_KEY = Deno.env.get("SCREENSHOTONE_ACCESS_KEY");
const SCREENSHOTONE_SECRET_KEY = Deno.env.get("SCREENSHOTONE_SECRET_KEY");
const CLOUDINARY_CLOUD_NAME = Deno.env.get("CLOUDINARY_CLOUD_NAME");
const CLOUDINARY_API_KEY = Deno.env.get("CLOUDINARY_API_KEY");
const CLOUDINARY_API_SECRET = Deno.env.get("CLOUDINARY_API_SECRET");

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

function getScreenshotOneUrl(options: any) {
    const baseUrl = "https://api.screenshotone.com/take";
    const params = new URLSearchParams();
    params.append("access_key", SCREENSHOTONE_ACCESS_KEY!);
    for (const [key, value] of Object.entries(options)) {
        if (value !== undefined) params.append(key, String(value));
    }
    params.sort();
    // HMAC SHA256 Signature generation...
    // Deno's Web Crypto API is async, but ScreenshotOne needs simple query param signature.
    // Actually, for Deno, manual HMAC hex might be verbose. 
    // Let's implement a simple HMAC helper if possible or assume we can just fetch.
    // Wait, ScreenshotOne requires signature if secret is set.
    // We'll skip signature locally if we can? No, secret is mandatory for security ideally.
    // But let's look at the crypto implementation below.
    return baseUrl + "?" + params.toString(); // Placeholder, see main logic
}

async function signUrl(urlParams: URLSearchParams, secret: string) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const key = await crypto.subtle.importKey(
        "raw", keyData, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const signature = await crypto.subtle.sign(
        "HMAC", key, encoder.encode(urlParams.toString())
    );
    return Array.from(new Uint8Array(signature)).map(b => b.toString(16).padStart(2, '0')).join('');
}


serve(async (req) => {
    if (!SCREENSHOTONE_ACCESS_KEY || !SCREENSHOTONE_SECRET_KEY || !CLOUDINARY_API_KEY) {
        return new Response(JSON.stringify({ error: "Missing Secrets" }), { status: 500 });
    }

    const output = [];

    const targets = [
        {
            filename: 'mobile_full',
            options: {
                url: 'https://www.klinikaurora.com.my/',
                viewport_width: 390,
                viewport_height: 844,
                device_scale_factor: 2,
                user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1',
                block_ads: true,
                block_cookie_banners: true,
                block_trackers: true,
                full_page: false,
                format: 'webp',
                image_quality: 80
            }
        },
        {
            filename: 'desktop_full',
            options: {
                url: 'https://www.klinikaurora.com.my/',
                viewport_width: 1920,
                viewport_height: 1080,
                device_scale_factor: 1,
                block_ads: true,
                block_cookie_banners: true,
                block_trackers: true,
                full_page: true,
                format: 'webp',
                image_quality: 80
            }
        }
    ];

    try {
        for (const target of targets) {
            const params = new URLSearchParams();
            params.append("access_key", SCREENSHOTONE_ACCESS_KEY);
            for (const [k, v] of Object.entries(target.options)) {
                params.append(k, String(v));
            }
            params.sort();

            const signature = await signUrl(params, SCREENSHOTONE_SECRET_KEY);
            const finalUrl = `https://api.screenshotone.com/take?${params.toString()}&signature=${signature}`;

            console.log(`Uploading ${target.filename} from ${finalUrl}...`);

            const uploadResult = await cloudinary.uploader.upload(finalUrl, {
                folder: 'portfolio_assets/Klinik Aurora',
                public_id: target.filename,
                overwrite: true,
                resource_type: 'image'
            });

            output.push({ name: target.filename, url: uploadResult.secure_url });
        }

        return new Response(JSON.stringify({ success: true, images: output }), {
            headers: { "Content-Type": "application/json" }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
    }
});
