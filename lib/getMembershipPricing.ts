import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';
import { MembershipPricing } from '@/components/pricing/PricingPage';

// Helper function to load the events page data
export default function getMembershipPricing(): MembershipPricing {
  const filePath = path.join(
    process.cwd(),
    'content/website-info/memberships.yml'
  );
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Use js-yaml to parse the YAML file
  const data = yaml.load(fileContents) as MembershipPricing;

  return data;
}
