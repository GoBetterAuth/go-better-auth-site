import Link from "next/link";

import { MoveRight } from "lucide-react";

import { Terminal } from "@/components/ui/terminal";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { CONSTANTS } from "@/constants/constants";
import { Meteors } from "@/components/ui/meteors";

const codeSnippet = `
import (
  "os"

  gobetterauth "github.com/GoBetterAuth/go-better-auth"
  gobetterauthconfig "github.com/GoBetterAuth/go-better-auth/config"
  gobetterauthmodels "github.com/GoBetterAuth/go-better-auth/models"
)

func main() {
  config := gobetterauthconfig.NewConfig(
    gobetterauthconfig.WithAppName("YourAppName"),
    gobetterauthconfig.WithDatabase(gobetterauthmodels.DatabaseConfig{
      Provider:         "postgres",
      ConnectionString: os.Getenv("DATABASE_URL"),
    }),
    gobetterauthconfig.WithEmailPassword(gobetterauthmodels.EmailPasswordConfig{
      Enabled:                  true,
    }),
  )
  auth := gobetterauth.New(config)
  // Run database migrations programmatically (optional)
  auth.RunMigrations()

  // Mount auth routes
  http.Handle("/auth/", auth.Handler())

  // Add your application routes
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Welcome to GoBetterAuth!"))
  })

  // Start the server
  log.Fatal(http.ListenAndServe(":8080", nil))
}
`.trim();

export default function IntroSection() {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <Meteors />

      <div className="w-full max-w-7xl p-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 border-x border-dashed border-sky-950">
        <div className="p-10 flex flex-col justify-center items-center text-center lg:text-left">
          <div className="mb-5">
            <Badge variant="outline" className="relative bg-slate-950 mb-5">
              <BorderBeam
                duration={5}
                size={35}
                colorFrom="#2b7fff"
                colorTo="#00a6f4"
              />
              <span>✨ Framework-independent Authentication</span>
            </Badge>

            <h2 className="mb-2 text-4xl font-bold bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
              Secure Auth
            </h2>
            <h2 className="text-4xl mb-4 font-bold">Made Simple for Go</h2>
            <p className="text-base w-full max-w-xl">
              A comprehensive, framework-independent authentication and
              authorization library that brings enterprise-grade security to
              your Go applications.
            </p>
            <div className="mt-5 flex flex-row gap-2 items-center justify-center lg:justify-start">
              <Button
                variant="outline"
                className="bg-linear-to-r from-blue-700 to-sky-700"
                asChild
              >
                <Link href="/docs" className="flex flex-row items-center gap-1">
                  <span>Get Started</span>
                  <MoveRight />
                </Link>
              </Button>

              <Button variant="default" asChild>
                <Link
                  href={CONSTANTS.githubRepoUrl}
                  target="_blank"
                  className="flex flex-row items-center gap-1"
                >
                  <GitHubIcon />
                  <span>GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden flex justify-center items-center">
          <Terminal className="w-full text-sm max-w-4xl text-left max-h-max bg-transparent">
            {codeSnippet}
          </Terminal>
        </div>
      </div>
    </section>
  );
}
