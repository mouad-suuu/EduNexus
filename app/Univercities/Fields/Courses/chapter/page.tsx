import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <BookIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">EduNexus</span>
          </Link>
          <Button>Sign In</Button>
        </div>
        <nav className="container max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/Univercities/Fields">
                  University
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/Univercities/Fields/Courses">
                  Quantum Mechanics
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center justify-between py-2">
            <nav className="flex items-center gap-4">
              <Link
                href="/Univercities/Fields/Courses/chapter"
                className="text-muted-foreground hover:underline"
                prefetch={false}
              >
                Chapter Content
              </Link>
              <Link
                href="/Univercities/Fields/Courses/chapter/Documents"
                className="text-primary font-medium"
                prefetch={false}
              >
                Documents
              </Link>
              <Link
                href="/Univercities/Fields/Courses/chapter/videos"
                className="text-muted-foreground hover:underline"
                prefetch={false}
              >
                Videos
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:underline"
                prefetch={false}
              >
                Exercises/Exams
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:underline"
                prefetch={false}
              >
                Questions
              </Link>
            </nav>
            <Button>
              <PlusIcon className="h-5 w-5" />
              Add New Chapter
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-1 grid grid-cols-[200px_1fr] gap-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between px-4 py-2 font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookIcon className="h-6 w-6 text-primary" />
              <span>Quantum Mechanics</span>
            </div>
            <ChevronRightIcon className="h-5 w-5 transition-all" />
          </div>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-muted/50 [&[data-state=open]>svg]:rotate-90">
              <span>Introduction to Quantum Mechanics</span>
              <ChevronRightIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
          </Collapsible>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-muted/50 [&[data-state=open]>svg]:rotate-90">
              <span>Quantum Mechanics 1</span>
              <ChevronRightIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
          </Collapsible>
          <Collapsible className="grid gap-2">
            <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-muted px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-muted/50 [&[data-state=open]>svg]:rotate-90">
              <span>uantum Mechanics 2</span>
              <ChevronRightIcon className="h-5 w-5 transition-all" />
            </CollapsibleTrigger>
          </Collapsible>
        </div>
        <div>
          <section className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="flex flex-col items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Chapter 1: Basics
                </h1>
                <p className="mt-4 text-muted-foreground">
                  Introduction to the basics of quantum mechanics.
                </p>
                <div className="mt-4 flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5" />
                    <span>Created by: Prof. Jane Doe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsersIcon className="h-5 w-5" />
                    <span>Edited by: Prof. John Smith, Dr. Sarah Lee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookIcon className="h-5 w-5" />
                    <span>Course Type: Quantum Mechanics</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Section 1.1: What is Quantum Mechanics?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Men
            </Link>
            <Link href="#" prefetch={false}>
              Women
            </Link>
            <Link href="#" prefetch={false}>
              Kids
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
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

function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FileQuestionIcon(props: any) {
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
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
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

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function VideoIcon(props: any) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
