"use client";

import { Dialog, Transition } from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function MobileMenu() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex md:hidden items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-full border border-slate-100 shadow px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex items-center space-x-2"
        >
          <p className="font-bold text-slate-500">Menu</p>

          <ChevronDownIcon className="w-5 h-5" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 backdrop-blur-sm bg-zinc-800/40 " />
          </Transition.Child>

          <div className="fixed top-4 w-full overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[95%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-top shadow-xl transition-all">
                  <div className="flex justify-between items-center">
                    <p className="text-md">Navigation</p>
                    <div>
                      <button type="button" onClick={closeModal}>
                        <XMarkIcon className="h-7 w-7" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <ul className="space-y-2 text-lg">
                      <li className="border-b py-3 border-slate-200">
                        <Link href="/about">About</Link>
                      </li>
                      <li className="border-b py-3 border-slate-200">
                        <Link href="/articles">Articles</Link>
                      </li>
                      <li className="border-b py-3 border-slate-200">
                        <Link href="/projects">Projects</Link>
                      </li>
                      <li className="py-3">
                        <Link href="/speaking">Speaking</Link>
                      </li>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
