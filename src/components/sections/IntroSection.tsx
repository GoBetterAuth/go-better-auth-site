import Link from "next/link";

import { MoveRight } from "lucide-react";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import GitHubIcon from "@/components/shared/icons/GitHubIcon";
import { CONSTANTS } from "@/constants/constants";
import { Meteors } from "@/components/ui/meteors";

const codeSnippets = [
  `import (
  "os"

  gobetterauth "github.com/GoBetterAuth/go-better-auth"
  gobetterauthdomain "github.com/GoBetterAuth/go-better-auth/domain"
)
`,
  `
func main() {
  auth, _ := gobetterauth.New(&gobetterauthdomain.Config{
    BaseURL:  "http://localhost:8080",
    BasePath: "/api/auth",
    Database: gobetterauthdomain.DatabaseConfig{
      Provider:         "postgres",
      ConnectionString: os.Getenv("DATABASE_URL"),
    },
    EmailAndPassword: &gobetterauthdomain.EmailPasswordConfig{
      Enabled: true,
      // ...more options
    },
    EmailVerification: &gobetterauthdomain.EmailVerificationConfig{
      Enabled:                     true,
      SendOnSignUp:                true,
      AutoSignInAfterVerification: true,
      // ...more options
    },
    SocialProviders: &gobetterauthdomain.SocialProvidersConfig{
      Google: &gobetterauthdomain.GoogleProviderConfig{
        ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
        ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
        RedirectURI:  "http://localhost:8080/auth/oauth/google/callback",
      },
      // ...other providers
    },
  })
}
`,
];

export default function IntroSection() {
  return (
    <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
      <Meteors />

      <div className="relative z-10 p-10 flex flex-col justify-center items-center text-center">
        <Badge variant="outline" className="relative bg-slate-950 mb-5">
          ✨ Framework-independent Authentication
          <BorderBeam
            duration={8}
            size={35}
            colorFrom="#2b7fff"
            colorTo="#00a6f4"
          />
        </Badge>

        <div className="mb-5">
          <h2 className="mb-2 text-4xl font-bold bg-linear-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">
            Secure Auth
          </h2>
          <h2 className="text-4xl mb-4 font-bold">Made Simple for Go</h2>
          <p className="text-base w-full max-w-xl text-center">
            A comprehensive, framework-independent authentication and
            authorization library that brings enterprise-grade security to your
            Go applications.
          </p>
          <div className="mt-5 flex flex-row gap-2 justify-center items-center">
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
                <span>View on GitHub</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center">
          <Terminal className="w-max max-w-max! text-left max-h-max bg-transparent border border-solid border-sky-950">
            {codeSnippets.map((line: string, index: number) =>
              index === 0 ? (
                <TypingAnimation key={index}>{line}</TypingAnimation>
              ) : (
                <AnimatedSpan key={index}>{line}</AnimatedSpan>
              )
            )}
          </Terminal>
        </div>
      </div>
    </section>
  );
}
