import Link from "next/link";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const codeSnippets = [
  `import (
  "os"

  gobetterauth "github.com/GoBetterAuth/go-better-auth"
  gobetterauthdomain "github.com/GoBetterAuth/go-better-auth/domain"
)
`,
  `
func main() {
  goBetterAuth, _ := gobetterauth.New(&gobetterauthdomain.Config{
    BaseURL:  "http://localhost:8080",
    BasePath: "/api/auth",
    Database: gobetterauthdomain.DatabaseConfig{
      Provider:         "postgres",
      ConnectionString: os.Getenv("DATABASE_URL"),
    },
    EmailAndPassword: &gobetterauthdomain.EmailPasswordConfig{
      Enabled: true,
      // ... other config
    },
    EmailVerification: &gobetterauthdomain.EmailVerificationConfig{
      Enabled:                     true,
      SendOnSignUp:                true,
      AutoSignInAfterVerification: true,
      // ... other config
    },
    SocialProviders: &gobetterauthdomain.SocialProvidersConfig{
      Google: &gobetterauthdomain.GoogleProviderConfig{
        ClientID:     os.Getenv("GOOGLE_CLIENT_ID"),
        ClientSecret: os.Getenv("GOOGLE_CLIENT_SECRET"),
        RedirectURI:  "http://localhost:8081/auth/oauth/google/callback",
      },
      // ... other providers
    },
  })
}
`,
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1">
      {/* INTRO SECTION */}
      <section className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-full skew-y-12"
          )}
        />

        <div className="relative z-10 p-10 flex flex-col justify-center items-center text-center">
          <Badge variant="outline" className="relative bg-background mb-5">
            ✨ Framework-independent Authentication
            <BorderBeam
              duration={8}
              size={35}
              colorFrom="#006045"
              colorTo="#004f3b"
            />
          </Badge>

          <div className="mb-5">
            <h2 className="mb-2 text-4xl font-bold bg-linear-to-r from-emerald-400 to-sky-600 bg-clip-text text-transparent">
              Secure Auth
            </h2>
            <h2 className="text-4xl mb-4 dark:text-white font-bold">
              Made Simple for Go
            </h2>
            <p className="text-base dark:text-white max-w-xl text-center mx-auto">
              A comprehensive, framework-independent authentication and
              authorization library that brings enterprise-grade security to
              your Go applications.
            </p>
            <div className="mt-5 flex flex-row gap-2 justify-center items-center">
              <Button
                variant="outline"
                className="bg-linear-to-r from-emerald-400 to-sky-600"
              >
                <Link href="/docs">Get Started</Link>
              </Button>
              <Button variant="default">View on GitHub</Button>
            </div>
          </div>

          <div className="w-full flex flex-row justify-center items-center">
            <Terminal className="w-max max-w-max! text-left max-h-max">
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

      {/* FEATURES SECTION */}
      <section id="features"></section>

      {/* SOLUTION SECTION */}
      <section id="solution"></section>

      {/* COMMUNITY SECTION */}
      <section id="community"></section>
    </main>
  );
}
