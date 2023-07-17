import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { searchHalalFood } from "./api/halalfood";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <section className="flex flex-col items-center gap-10">
          <h1 className="mt-5 text-center text-5xl font-extrabold">
            Make finding halal food options <br /> as easy as it should be
          </h1>
          <p className="text-center font-semibold">
            With this tool find any and every type of cuisine in your area{" "}
            <br /> <span className="text-xl font-bold">ALL HALAL</span>
          </p>
          <h1 className="text-center text-3xl font-extrabold text-blue-600">
            Start Here
          </h1>

          <form className="flex flex-col items-center justify-center">
            <div className="mb-6 flex flex-col items-center">
              <label
                htmlFor="zip-code"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Enter Zip Code:
              </label>
              <input
                type="text"
                id="zip"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm"
                placeholder="Zip Code"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
            >
              Search
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4"></div>
  );
}
