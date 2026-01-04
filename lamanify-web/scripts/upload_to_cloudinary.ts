import path from 'path';
import fs from 'fs';

// Configuration
const PROJECT_REF = 'nnfmmovmcxjlmbisrnkt';
const FUNCTION_NAME = 'upload-assets';
const SUPABASE_URL = `https://${PROJECT_REF}.supabase.co/functions/v1/${FUNCTION_NAME}`;
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uZm1tb3ZtY3hqbG1iaXNybmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczOTA4ODIsImV4cCI6MjA4Mjk2Njg4Mn0.HsXQQDNgmqS7panva6kWDiGHU4PACvjLFtm_xtcAxn4';

const FOLDER = 'portfolio_assets/Kita Dental';
const FILES = ['mobile_full.webp', 'desktop_full.webp'];
const BASE_DIR = path.join(process.cwd(), 'temp_screenshots');

async function upload() {
    console.log(`Uploading to Supabase Edge Function [${FUNCTION_NAME}] -> Cloudinary folder: ${FOLDER}...`);

    for (const file of FILES) {
        const filePath = path.join(BASE_DIR, file);
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`);
            continue;
        }

        try {
            console.log(`Uploading ${file}...`);

            const blob = new Blob([fs.readFileSync(filePath)]);
            const formData = new FormData();
            formData.append('file', blob, file);
            formData.append('folder', FOLDER);
            formData.append('public_id', path.basename(file, '.webp'));

            const response = await fetch(SUPABASE_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${ANON_KEY}`
                },
                body: formData
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorText}`);
            }

            const result = await response.json();
            if (result.success) {
                console.log(`Success! URL: ${result.url}`);
            } else {
                console.error(`Upload error:`, result);
            }

        } catch (error) {
            console.error(`Failed to upload ${file}:`, error);
        }
    }
}

upload();
