import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import React from "react";

function Newsletter() {
  return (
    <div className="border border-zinc-100 rounded-2xl p-6 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center space-x-4">
          <ChatBubbleBottomCenterIcon className="h-5 w-5" />
          <p className="font-semibold text-sm">Stay up to date</p>
        </div>
        <p>
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>
      </div>

      <form className="w-full flex space-x-2">
        <div className="flex-1">
          <input
            type="email"
            placeholder="Email address"
            className="border rounded-lg px-4 py-2  shadow-md shadow-zinc-800/5 focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-800/10 w-full"
          />
        </div>
        <button className="px-4 py-2 text-white bg-black rounded-lg font-semibold">
          Join
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
