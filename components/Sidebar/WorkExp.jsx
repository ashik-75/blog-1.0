import { BriefcaseIcon } from "@heroicons/react/24/outline";
import React from "react";

function Work() {
  return (
    <div className="flex items-end justify-between">
      <div className="flex items-center space-x-2">
        <div className="p-2 border rounded-full">
          <img src="node-js.png" className="w-5 h-5 " alt="" />
        </div>
        <div>
          <p>Airbnb</p>
          <p className="text-slate-500 text-sm">Product Designer</p>
        </div>
      </div>
      <p className="text-slate-500 text-sm">2019 - Present</p>
    </div>
  );
}

function WorkExp() {
  return (
    <div className="p-6 space-y-5 border border-zinc-100 rounded-2xl">
      <div className="flex items-center space-x-3">
        <BriefcaseIcon className="h-5 w-5" />
        <p className="font-semibold">Work</p>
      </div>
      <div className="space-y-4">
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
    </div>
  );
}

export default WorkExp;
