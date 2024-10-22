import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { Hours } from '@/types/types';

// Helper function to load the events page data
export default function getHoursData(): Hours {
  const filePath = path.join(process.cwd(), 'content/website-info/hours.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as Hours;

  return data;
}
