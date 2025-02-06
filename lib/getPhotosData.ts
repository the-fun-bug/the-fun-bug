import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { Photos, HomePagePhoto } from '@/types/types';

// Helper function to load the YAML data
function loadPhotosData(): Photos {
  const filePath = path.join(process.cwd(), 'content/website-info/photos.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as Photos;
}

// Function to get the about photo
export function getAboutPhoto(): string {
  const data = loadPhotosData();
  return data.aboutPhoto;
}

// Function to get the homepage photos
export function getHomepagePhotos(): HomePagePhoto[] {
  const data = loadPhotosData();
  return data.homepagePhotos;
}
