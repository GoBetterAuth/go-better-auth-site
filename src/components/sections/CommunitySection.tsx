import Link from "next/link";

import { Button } from "@/components/ui/button";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import GolangIcon from "@/components/shared/icons/GolangIcon";
import { ShineBorder } from "@/components/ui/shine-border";
import { CONSTANTS } from "@/constants/constants";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative p-20 px-10 border-t border-solid border-sky-950/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full -z-10"></div>

      <div className="relative max-w-5xl mx-auto bg-[#0A1A2A] rounded-2xl p-10 md:p-20 text-center overflow-hidden border border-sky-900/50">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 blur-3xl rounded-full"></div>
        <ShineBorder shineColor={["#14b8a6", "#06b6d4"]} />

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-900/50 rounded-lg flex items-center justify-center border border-gray-700">
              <GolangIcon />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
            Open Source & Community Driven
          </h2>
          <p className="text-base text-gray-400 mt-4 max-w-2xl mx-auto">
            Go Better Auth is fully open source and maintained by the community.
            Contribute, report issues, or star us on GitHub.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              className="bg-linear-to-r from-green-700 to-sky-700"
              asChild
            >
              <Link href={CONSTANTS.githubRepoUrl} target="_blank">
                <GitHubIcon className="mr-2" />
                View on GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs">Read Documentation</Link>
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Released under the Apache 2.0 License
          </p>
        </div>
      </div>
    </section>
  );
}
