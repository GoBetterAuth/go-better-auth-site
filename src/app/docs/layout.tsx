import { DocsLayout } from "fumadocs-ui/layouts/docs";

import { source } from "@/lib/source";
import { baseOptions } from "@/lib/layout.shared";
import { CONSTANTS } from "@/constants/constants";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.pageTree}
      sidebar={{
        prefetch: false,
      }}
      githubUrl={CONSTANTS.githubRepoUrl}
    >
      {children}
    </DocsLayout>
  );
}
