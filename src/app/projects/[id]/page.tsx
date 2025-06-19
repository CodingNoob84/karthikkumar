import { ProjectDetailClientPage } from "@/components/projects/project-detail-page";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ProjectDetailClientPage titleUrl={id as string} />;
}
