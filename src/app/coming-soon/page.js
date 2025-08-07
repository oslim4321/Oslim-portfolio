import Link from "next/link";

export const metadata = {
  title: "Coming Soon",
  description:
    "This page is currently under development. Stay tuned for exciting new content from Sooto Selim's portfolio.",
  robots: {
    index: false,
    follow: true,
  },
};

const page = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-light">
              Coming Soon
            </h1>
            <p className="text-gray-600 dark:text-light/70">
              This page is still under development. Please check back soon.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-12">
            <Link href="/" className="text-gray-800 text-decoration-none">
              <button className="py-2 px-4 rounded-md bg-gray-500 text-white">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
