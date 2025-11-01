import Link from "next/link";
import { Shield, Lock, Zap, Code, MoveRight, Github } from "lucide-react";

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
import GitHubIcon from "@/components/shared/icons/github";

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
        RedirectURI:  "http://localhost:8081/auth/oauth/google/callback",
      },
      // ...other providers
    },
  })
}
`,
];

const featuresItems = [
  {
    title: "Framework Independent",
    description:
      "Works seamlessly with any Go framework or as a standalone library",
    icon: Shield,
  },
  {
    title: "Secure by Default",
    description: "Built with security best practices and industry standards",
    icon: Lock,
  },
  {
    title: "High Performance",
    description:
      "Optimized for speed with minimal overhead and maximum efficiency",
    icon: Zap,
  },
  {
    title: "Developer Friendly",
    description:
      "Clean API design with comprehensive documentation and examples",
    icon: Code,
  },
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
          <Badge variant="outline" className="relative bg-gray-950 mb-5">
            ✨ Framework-independent Authentication
            <BorderBeam
              duration={8}
              size={35}
              colorFrom="#87CEEB"
              colorTo="#4682B4"
            />
          </Badge>

          <div className="mb-5">
            <h2 className="mb-2 text-4xl font-bold bg-linear-to-r from-green-500 to-sky-500 bg-clip-text text-transparent">
              Secure Auth
            </h2>
            <h2 className="text-4xl mb-4 font-bold">Made Simple for Go</h2>
            <p className="text-base max-w-xl text-center mx-auto">
              A comprehensive, framework-independent authentication and
              authorization library that brings enterprise-grade security to
              your Go applications.
            </p>
            <div className="mt-5 flex flex-row gap-2 justify-center items-center">
              <Button
                variant="outline"
                className="bg-linear-to-r from-green-500 via-emerald-500 to-sky-700"
              >
                <Link href="/docs" className="flex flex-row items-center gap-1">
                  <span>Get Started</span>
                  <MoveRight />
                </Link>
              </Button>
              <Button variant="default">
                <GitHubIcon />
                <span>View on GitHub</span>
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

      {/* FEATURES SECTION */}
      <section id="features" className="relative py-20 px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="bg-linear-to-r from-green-500 to-sky-500 bg-clip-text text-transparent font-semibold">
              Everything you need
            </p>
            <h2 className="text-4xl font-bold mt-2">Powerful Features</h2>
            <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
              Everything you need for modern authentication and authorization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {featuresItems.map((feature, index: number) => (
              <div key={index} className="flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-linear-to-r from-green-500/10 to-sky-500/30 border border-emerald-400/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-emerald-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution"></section>

      {/* COMMUNITY SECTION */}
      <section id="community"></section>
    </main>
  );
}
