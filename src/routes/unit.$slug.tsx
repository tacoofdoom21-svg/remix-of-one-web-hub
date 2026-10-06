import { createFileRoute, notFound } from "@tanstack/react-router";
import { CourseShell } from "@/components/course-shell";
import { UnitPage } from "@/components/unit-page";
import { getUnit } from "@/lib/course-data";

export const Route = createFileRoute("/unit/$slug")({
  loader: ({ params }) => {
    const unit = getUnit(params.slug);
    if (!unit) throw notFound();
    return { slug: unit.slug, title: unit.title, description: unit.description };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Unit not found — Circuit/101" }, { name: "robots", content: "noindex" }] };
    const title = `${loaderData.title} — Circuit/101`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: UnitRoute,
});

function UnitRoute() {
  const { slug } = Route.useLoaderData();
  const unit = getUnit(slug)!;
  return <CourseShell><UnitPage key={unit.slug} unit={unit} /></CourseShell>;
}
