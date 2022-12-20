import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
function Blog() {
  return (
    <div className="p-5 space-y-4 hover:bg-slate-50 rounded-lg transition-all duration-200 cursor-pointer">
      <p className="border-l text-sm pl-5 text-slate-400">July 14, 2022</p>
      <p className="font-bold">Rewriting the cosmoOS kernel in Rust</p>
      <p className="text-sm">
        When we released the first version of cosmOS last year, it was written
        in Go. Go is a wonderful programming language with a lot of benefits,
        but it’s been a while since I’ve seen an article on the front page of
        Hacker News about rewriting some important tool in Go and I see articles
        on there about rewriting things in Rust every single week.
      </p>
      <div className="flex items-center space-x-2 cursor-pointer">
        <p className="font-bold text-teal-600">Read article</p>
        <ChevronRightIcon className="h-3 w-3 text-slate-500" />
      </div>
    </div>
  );
}

export default Blog;
