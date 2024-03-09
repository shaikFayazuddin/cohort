import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCars";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <VideoCard></VideoCard>
      </div>
    </main>
  );
}
