import TransitionEffect from "@/src/components/TransitionEffect";

export const dynamic = "force-dynamic";

// This would generate metadata for individual project pages
export async function generateMetadata({ params }) {
  const { id } = params;

  // You would fetch the specific project data here
  // For now, using generic metadata
  return {
    title: `Project ${id}`,
    description: `Detailed view of project ${id} by Sooto Selim. Explore the technologies used, features implemented, and development process.`,
    keywords: [
      "Project Details",
      "Web Development Project",
      "Portfolio Item",
      "Case Study",
      "Sooto Selim Project",
    ],
    openGraph: {
      title: `Project ${id} - Sooto Selim Portfolio`,
      description: `Detailed view of project ${id} featuring innovative web development solutions.`,
      images: [
        {
          url: "/images/project-placeholder.png",
          width: 1200,
          height: 630,
          alt: `Project ${id} Screenshot`,
        },
      ],
    },
    alternates: {
      canonical: `/project/${id}`,
    },
  };
}

// This would generate static params for all projects
export async function generateStaticParams() {
  // For now, return empty array since you don't have individual project pages yet
  // When you implement project details, you would fetch all project IDs here
  return [];
}

export default async function ProjectDetail({ params }) {
  const { id } = params;

  // For now, since individual project pages aren't implemented,
  // redirect to main projects page or show coming soon
  return (
    <>
      <TransitionEffect />
      <section className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-light mb-4">
            Project Details Coming Soon
          </h1>
          <p className="text-gray-600 dark:text-light/70 mb-8">
            Individual project detail pages are currently under development.
          </p>
          <a
            href="/project"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </section>
    </>
  );
}
