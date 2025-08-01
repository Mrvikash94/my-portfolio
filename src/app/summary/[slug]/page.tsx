// app/summary/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { projectsData } from '@/lib/projectsData'

type PageProps = {
  params: {
    slug: string
  }
}

// ✅ Metadata generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

// ✅ Page component
export default async function SummaryPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <div className="max-w-4xl mx-auto py-16">
      <h1 className="heading-lg mb-8">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg mb-6"
      />
      {project.detailsSections?.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="heading-md mb-4">{section.sectionTitle}</h2>
          <ul className="list-disc list-inside space-y-2">
            {section.functionality.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {section.link && (
            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary"
            >
              View Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  )
}
