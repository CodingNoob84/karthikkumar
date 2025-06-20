"use client";
import { ProjectDetailClientPage } from "@/components/projects/project-detail-page";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  return <ProjectDetailClientPage titleUrl={params.id} />;
}
