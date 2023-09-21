import React from "react";

export default function contact() {
  return (
    <section className="bg-slate-900 ">
      <div className="mx-auto max-w-screen-md px-4 text-slate-400  ">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-slate-400 ">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light text-slate-400  sm:text-xl lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium ">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500    block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm   "
              placeholder="name@halalfinder.com"
              required
            ></input>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="focus:ring-primary-500 focus:border-primary-500    block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm  "
              placeholder="Let us know how we can help you"
              required
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500   block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm    "
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="focus:ring-primary-300 rounded-lg bg-blue-700   px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
