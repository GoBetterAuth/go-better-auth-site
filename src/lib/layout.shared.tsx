import Image from "next/image";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { CONSTANTS } from "@/constants/constants";

function LogoImage() {
  return (
    <div className="h-full w-full flex flex-row items-center justify-start">
      <Image src="/app-logo.png" alt="App Logo" width={50} height={50} />
    </div>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: CONSTANTS.githubRepoUrl,
    nav: {
      enabled: true,
      children: <LogoImage />,
    },
    themeSwitch: {
      enabled: false,
    },
  };
}
