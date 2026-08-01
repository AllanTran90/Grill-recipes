import Link from "next/link";
import { Flame, BookOpen, Bookmark } from "lucide-react";

export default function SiteNav() {
  return (
    <div className="bg-[#241a16] border-b border-orange-900/50">
      <nav className="max-w-5xl mx-auto flex gap-4 px-4 py-3 font-heading text-sm">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-orange-200 hover:text-orange-400"
        >
          <Flame className="w-4 h-4" />
          Produkter
        </Link>
        <Link
          href="/recept"
          className="flex items-center gap-1.5 text-orange-200 hover:text-orange-400"
        >
          <BookOpen className="w-4 h-4" />
          Recept
        </Link>
        <Link
          href="/recept/sparade"
          className="flex items-center gap-1.5 text-orange-200 hover:text-orange-400"
        >
          <Bookmark className="w-4 h-4" />
          Mina recept
        </Link>
      </nav>
    </div>
  );
}
