import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { BannerType } from '@/types/types';

// Helper function to load the events page data
export default function getBannerText(): BannerType {
  const filePath = path.join(process.cwd(), 'content/website-info/banner.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as BannerType;

  return data;
}
