import { Medal } from "lucide-react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { headingFont } from "@/components/localFont";

const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400"
    ]
})

const MarketingPage = () => {
  return (
      <div className="flex flex-col justify-center items-center">
        <div className={cn("flex flex-col justify-center items-center", headingFont.className)}>
          <div className="mb-4 flex items-center
          border shadow-sm p-4 bg-amber-100
          text-amber-700 rounded-full uppercase">
              <Medal className="h-6 w-6 mr-2" />
              No 1 task management
          </div>
            <h1 className="text-3xl md:text-6xl
            text-center text-neutral-800 mb-6">
                Taskify helps team move
            </h1>
            <div className="text-3xl md:text-6xl
            bg-gradient-to-r from-fuchsia-600 to-pink-600
            text-white px-4 py-2 rounded">
                work forward.
            </div>
        </div>
          <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", poppinsFont.className)}>
              Collaborate, manage projects, and reach new productivity peaks.
              Dictum dicta epicurei nulla cursus dicit. Mauris nisl vituperatoribus lacinia dolorem veritus penatibus.
              Nunc mucius venenatis docendi consetetur singulis volumus ligula.
          </div>
          <Button className="mt-4" size="lg" asChild>
              <Link href="/sign-up">
                  Get Taskify
              </Link>
          </Button>
      </div>
  )
}

export default MarketingPage;