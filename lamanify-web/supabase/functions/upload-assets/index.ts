import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { v2 as cloudinary } from "npm:cloudinary@1.41.3";

const CLOUD_NAME = Deno.env.get("CLOUDINARY_CLOUD_NAME");
const API_KEY = Deno.env.get("CLOUDINARY_API_KEY");
const API_SECRET = Deno.env.get("CLOUDINARY_API_SECRET");

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});

serve(async (req) => {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response('ok', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            }
        });
    }

    try {
        if (!CLOUD_NAME || !API_KEY || !API_SECRET) {
            throw new Error("Missing Cloudinary configuration secrets");
        }

        const formData = await req.formData();
        const file = formData.get('file');
        const folder = formData.get('folder') || 'portfolio_assets';
        const public_id = formData.get('public_id') as string;

        if (!file) {
            return new Response(JSON.stringify({ error: "No file provided" }), { status: 400 });
        }

        // Convert file to buffer/stream for Cloudinary
        // Cloudinary upload_stream is a stream interaction, but here we might just pass the blob if possible or use a temp approach.
        // Actually, npm:cloudinary supports file path or url. For stream/buffer, we need execute upload_stream.

        let arrayBuffer;
        if (file instanceof File || file instanceof Blob) {
            arrayBuffer = await file.arrayBuffer();
        } else {
            return new Response(JSON.stringify({ error: "Invalid file format" }), { status: 400 });
        }

        const uint8Array = new Uint8Array(arrayBuffer);

        // Promisify the stream upload
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: folder as string,
                    public_id: public_id,
                    overwrite: true,
                    resource_type: 'image'
                },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            // Write buffer to stream
            uploadStream.end(uint8Array);
        });

        // @ts-ignore
        return new Response(JSON.stringify({ success: true, url: uploadResult.secure_url }), {
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: String(error) }), {
            status: 500,
            headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }
        });
    }
});
