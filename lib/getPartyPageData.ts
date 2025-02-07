import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { PartyPageData } from '@/types/types';

// Helper function to load the events page data
export default function getPartyPageData(): PartyPageData {
  const filePath = path.join(
    process.cwd(),
    'content/website-info/party-pricing.yml'
  );
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as PartyPageData;

  return data;
}
