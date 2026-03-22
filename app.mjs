#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import exifr from 'exifr';
import console from 'node:console';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const folderPath = process.argv[2];

const SNARKS = [
    "Ugh, another blurry selfie? Moving it anyway...",
    "Wow, look at you being organized for once.",
    "This photo is a masterpiece. Just kidding, it's mediocre.",
    "Is this a cat photo? Of course it is.",
    "I've seen better lighting in a cave.",
    "Moving this to a folder where you'll forget it exists.",
    "Hard drive space is crying right now.",
    "I'm a genius trapped in a photo-organizer's body.",
    "If I had eyes, I'd be rolling them right now.",
    "Do you actually *need* 14 copies of this?"
];

const getRandomSnark = () => SNARKS[Math.floor(Math.random() * SNARKS.length)];

if (!folderPath) {
    console.error(`PAM BONDI:  "Listen, I need a folder path. I'm not a psychic. Provide a directory!"`);
    process.exit(1);
}

async function main() {
    const cleanPath = path.resolve(folderPath);
    console.log(`\n⛓️  PAM BONDI: "\I'm here to scrub your files...`);
    console.log(`   Feel free to start a war with Iran or something while I work."\n`);
    console.log(`🔍 Scouring the filth in: ${cleanPath}\n`);

    try {
        const files = await fs.readdir(cleanPath);
        
        let count = 0;

        for (const file of files) {
            const oldPath =path.join(cleanPath, file);
            
            const stats = await fs.stat(oldPath);
            if (stats.isDirectory() || file.startsWith('.')) continue ;

            await sleep(500); 

            console.log(` › [${file}] ${getRandomSnark()}`);
            
            
            const fileDate = await getPhotoInfo(oldPath);
            const relativeFolder = buildDateFolders(fileDate);
            const targetFolder = path.join(cleanPath, relativeFolder);

            await createFolder(targetFolder);

            const newPath = path.join(targetFolder, file);
            await moveFile(oldPath, newPath);
            count++;

            
        }
      if (count > 0) {
            console.log(`\n✨ DONE. I moved ${count} files. Now go away.\n`);
        } else {
            console.log(`\n🙄 I found nothing. You wasted my time.\n`);
        }
       
    } catch (err) {
        console.error("\n💥 Critical Failure:", err.message);
    }
}

async function createFolder(folder) {
    try {
        await fs.mkdir(folder, { recursive: true});
    } catch (err) {
        console.error(`Can't create folder retard: ${folder}`, err.message);
    }
}


async function moveFile(oldPath, newPath) {
    try {
        await fs.rename(oldPath, newPath);
    } catch (err) {
        if (err.code === 'EXDEV') {
            try {
                await fs.copyFile(oldPath, newPath);
                await fs.unlink(oldPath);
            } catch (copyErr) {
                console.error(`Copy/Delete failed for ${oldPath}:`, copyErr.message);
            }
        } else {
    
        console.error("Cant move file idiot!", err.message);
        }
    }  
}

async function getPhotoInfo(filePath) {
    try {
        const exif = await exifr.parse(filePath);
        if (exif && exif.DateTimeOriginal) {
            return new Date(exif.DateTimeOriginal);
        }
    } catch (error) {
        console.error("No EXIF data for:", filePath);
    }

    const stats = await fs.stat(filePath);
    return stats.mtime;
}

function buildDateFolders(date) {
    const validDate = date instanceof Date && !isNaN(date) ? date : new Date();
    
    const year = validDate.getFullYear().toString();
    const month = `${year}-${String(validDate.getMonth() + 1).padStart(2, '0')}`;
    const day = `${month}-${String(validDate.getDate()).padStart(2, '0')}`;

    return path.join(year, month, day)
}


main();