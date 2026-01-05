import path from 'path';
import fs from 'fs';
import https from 'https';

// Configuration
const PROJECT_REF = 'nnfmmovmcxjlmbisrnkt';
const FUNCTION_NAME = 'upload-assets';
const SUPABASE_URL = `https://${PROJECT_REF}.supabase.co/functions/v1/${FUNCTION_NAME}`;
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uZm1tb3ZtY3hqbG1iaXNybmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczOTA4ODIsImV4cCI6MjA4Mjk2Njg4Mn0.HsXQQDNgmqS7panva6kWDiGHU4PACvjLFtm_xtcAxn4';

const LOGO_URL = 'https://www.mediprima.asia/wp-content/uploads/2024/08/Mediprima-Healthcare-Logo-2-1.png';
const SAVE_FILENAME = 'logo.png';
const UPLOAD_FOLDER = 'portfolio_assets/Poliklinik Mediprima';
const BASE_DIR = path.join(process.cwd(), 'temp_screenshots');

if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR);
}

async function downloadLogo(url: string, filepath: string) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download: ${response.statusCode}`));
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

async function upload() {
    const filePath = path.join(BASE_DIR, SAVE_FILENAME);

    console.log(`Downloading logo from ${LOGO_URL}...`);
    try {
        await downloadLogo(LOGO_URL, filePath);
        console.log(`Downloaded to ${filePath}`);
    } catch (error) {
        console.error('Error downloading logo:', error);
        return;
    }

    console.log(`Uploading to Supabase Edge Function [${FUNCTION_NAME}] -> Cloudinary folder: ${UPLOAD_FOLDER}...`);

    try {
        const blob = new Blob([fs.readFileSync(filePath)]);
        const formData = new FormData();
        formData.append('file', blob, SAVE_FILENAME);
        formData.append('folder', UPLOAD_FOLDER);
        formData.append('public_id', 'logo'); // Explicit public_id

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
            console.log(`Secure URL: ${result.secure_url}`);
        } else {
            console.error(`Upload error:`, result);
        }

    } catch (error) {
        console.error(`Failed to upload logo:`, error);
    }
}

upload();
