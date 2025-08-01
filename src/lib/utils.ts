import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const projectsData = [
  {
    slug: 'servicewala',
    title: 'ServiceWala – Local Services Platform',
    image: '/servicewala.png', // Add this image in /public folder
    detailsSections: [
      {
        sectionTitle: 'Overview',
        functionality: [
          'Full-stack platform for local service bookings.',
          'Customer and Service Provider flows.',
          'OTP-based mobile login.'
        ]
      },
      {
        sectionTitle: 'Features',
        functionality: [
          'Multi-role dashboards.',
          'Job posting and scheduling.',
          'Payment method selection.'
        ]
      },
      {
        sectionTitle: 'Tech Stack',
        functionality: [
          'Next.js, TypeScript, Tailwind CSS (Frontend)',
          'Node.js, Express.js, MongoDB (Backend)'
        ]
      }
    ]
  }
];
