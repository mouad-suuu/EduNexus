import Image from "next/image";
import { DashBoard } from "@/components/DashBoard";
export default function Home() {
  return (
    <main className="max-w-7xl flex mx-auto my-11">
      <DashBoard />
    </main>
  );
}
