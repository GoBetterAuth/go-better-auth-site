import Image from "next/image";

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

function LogoImage() {
  return (
    <div className="h-full w-full flex flex-row items-center justify-start">
      <Image src="/app-logo.png" alt="App Logo" width={50} height={50} />
    </div>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: true,
      children: <LogoImage />,
    },
    themeSwitch: {
      enabled: false,
    },
  };
}
