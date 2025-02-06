import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { PartyPricing } from '@/types/types';

// Helper function to load the events page data
export default function getPartyPricing(): PartyPricing {
  const filePath = path.join(
    process.cwd(),
    'content/website-info/party-pricing.yml'
  );
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as PartyPricing;

  return data;
}
