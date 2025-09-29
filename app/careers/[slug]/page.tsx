import { allJobs, Job } from "@/app/_data/job-data";
import { notFound } from "next/navigation";

const InfoBox: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="rounded-xl p-4 text-center ring-1 ring-inset ring-gray-200">
    <dt className="mt-1 text-base font-bold text-gray-700">{label}</dt>
    <dd className="text-sm font-semibold text-gray-500">{value}</dd>
  </div>
);

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const job = allJobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#F9FFF5] p-6 sm:p-10 ring-1 ring-gray-900/5">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {job.title}
            </h1>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities Section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Primary Responsibility:
            </h2>
            <div className="mt-4 prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
              {job.primaryResponsibilities}
            </div>
          </div>

          {/* Specification Section */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-gray-800 text-center">
              Job Specification
            </h2>
            <div className="mt-4 prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
              {job.jobSpecification}
            </div>
          </div>

          {/* Info Boxes Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <InfoBox
              label="Experience Required"
              value={job.experienceRequired}
            />
            <InfoBox label="Employment Type" value={job.employmentType} />
            <InfoBox label="Job Location" value={job.location} />
            <InfoBox label="Salary" value={job.salary} />
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block w-80 rounded-lg bg-green-600 px-10 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return allJobs.map((job) => ({
    slug: job.slug,
  }));
}
