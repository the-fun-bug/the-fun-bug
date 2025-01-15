import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { AdmissionsPricing } from '@/components/pricing/PricingPage';

// Helper function to load the events page data
export default function getAdmissionsPricing(): AdmissionsPricing {
  const filePath = path.join(
    process.cwd(),
    'content/website-info/admissions.yml'
  );
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as AdmissionsPricing;

  return data;
}
