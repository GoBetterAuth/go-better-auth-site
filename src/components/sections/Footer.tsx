import Link from "next/link";
import Image from "next/image";

import { BookOpen } from "lucide-react";

import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { CONSTANTS } from "@/constants/constants";

export default function Footer() {
  return (
    <footer className="border-t border-dashed border-sky-950 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/app-logo.png"
            alt="Go Better Auth Logo"
            width={50}
            height={50}
          />
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={CONSTANTS.githubRepoUrl}
            target="_blank"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </Link>
          <Link
            href="/docs"
            className="flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Docs
          </Link>
        </div>
      </div>

      <p className="mt-5 text-sm text-center border-t border-dashed border-sky-950 pt-4">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
