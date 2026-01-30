import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { GalleryPhotos, Photo, GalleryImageGroup } from '@/types/types';

// Helper function to load the YAML data
function loadPhotosData(): GalleryPhotos {
  const filePath = path.join(process.cwd(), 'content/website-info/gallery.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as GalleryPhotos;
}

// Function to get the about photo
export function getCafePhotos(): Photo[] {
  const data = loadPhotosData();

  const photos = data.cafe.filter((photo) => !!photo.page);

  // Shuffle (Fisher-Yates)
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }

  return photos;
}

// Function to get the homepage photos
export function getPartiesPhotos(): Photo[] {
  const data = loadPhotosData();
  const photos = data.parties.filter((photo) => !!photo.page);

  // Shuffle (Fisher-Yates)
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }

  return photos;
}

export default async function getAllGalleryImages(): Promise<
  GalleryImageGroup[]
> {
  const data = loadPhotosData();

  const shuffleArray = <T>(array: T[]): T[] => {
    return array
      .map((item) => ({ ...item, sortKey: Math.random() })) // Add a random key
      .sort((a, b) => a.sortKey - b.sortKey) // Sort by random key
      .map(({ sortKey, ...item }) => item as T); // Explicitly cast back to T
  };

  return [
    {
      eventType: 'parties',
      images: shuffleArray(data.parties),
    },
    {
      eventType: 'openPlay',
      images: shuffleArray(data.openPlay),
    },
    {
      eventType: 'cafe',
      images: shuffleArray(data.cafe),
    },
    {
      eventType: 'events',
      images: shuffleArray(data.events),
    },
  ];
}
