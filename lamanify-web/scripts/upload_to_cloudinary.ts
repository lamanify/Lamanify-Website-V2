import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs';

// Configuration - Expecting params or env vars
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'lamanify';
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

if (!API_KEY || !API_SECRET) {
    console.error('Error: CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET are required.');
    process.exit(1);
}

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});

const FOLDER = 'portfolio_assets/Klinik Aurora';
const FILES = ['mobile_full.webp', 'desktop_full.webp'];
const BASE_DIR = path.join(process.cwd(), 'temp_screenshots');

async function upload() {
    console.log(`Uploading to Cloudinary [${CLOUD_NAME}] folder: ${FOLDER}...`);

    for (const file of FILES) {
        const filePath = path.join(BASE_DIR, file);
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`);
            continue;
        }

        try {
            console.log(`Uploading ${file}...`);
            const result = await cloudinary.uploader.upload(filePath, {
                folder: FOLDER,
                public_id: path.basename(file, '.webp'), // e.g. mobile_full
                overwrite: true,
                resource_type: 'image'
            });
            console.log(`Success! URL: ${result.secure_url}`);
        } catch (error) {
            console.error(`Failed to upload ${file}:`, error);
        }
    }
}

upload();
