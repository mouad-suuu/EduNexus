import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">EduNexus</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="#"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-primary hover:underline"
              prefetch={false}
            >
              Courses
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:underline"
              prefetch={false}
            >
              Profile
            </Link>
          </nav>
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search fields or courses..."
              className="w-full rounded-lg bg-muted pl-10 pr-4 focus:border-primary focus:outline-none"
            />
          </div>
          <Button>Sign In</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Physics
              </h1>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                Explore the fundamental laws of the universe and cutting-edge
                research in physics.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Cambridge, UK</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    physics@cam.ac.uk
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    www.cam.ac.uk/physics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Chapters for Physics
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Quantum Mechanics</h3>
                </div>
                <Link
                  href="/Univercities/Fields/Courses/chapter"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the strange and fascinating world of quantum physics.
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>Fall 2023</span>
                <span>Prof. Jane Doe</span>
              </div>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Electromagnetism</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Dive into the fundamental principles of electricity and
                magnetism.
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>Spring 2024</span>
                <span>Prof. John Smith</span>
              </div>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Thermodynamics</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the fundamental laws governing heat, energy, and the
                behavior of systems.
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>Fall 2023</span>
                <span>Prof. Sarah Lee</span>
              </div>
            </Card>
            <Card className="group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Astrophysics</h3>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  View
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">
                Explore the mysteries of the universe, from stars and galaxies
                to black holes and dark matter.
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>Spring 2024</span>
                <span>Prof. Michael Johnson</span>
              </div>
            </Card>
          </div>
          <div className="mt-8 flex justify-end">
            <Button>
              <PlusIcon className="h-5 w-5" />
              Add New Course
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              &copy; 2024 EduNexus. All rights reserved.
            </span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
              prefetch={false}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
