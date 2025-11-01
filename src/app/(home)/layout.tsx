import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          text: "Features",
          url: "/#features",
        },
        {
          text: "Solution",
          url: "/#solution",
        },
        {
          text: "Docs",
          url: "/docs",
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
