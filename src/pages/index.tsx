import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React, { useState, FormEvent } from "react";

export default function Home() {
  const [zipCode, setZipCode] = useState("");
  const [halalBusinesses, setHalalBusinesses] = useState([]);
  const [loadingBusinesses, setLoadingBusinesses] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoadingBusinesses(true);

      const response = await fetch(`/api/halalfood?zipcode=${zipCode}`);
      const data = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setHalalBusinesses(data);
      console.log(data);
    } catch (error) {
      console.error("Error retrieving halal food businesses:", error);
    } finally {
      setLoadingBusinesses(false);
    }
  };

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

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
            method="post"
          >
            <div className="mb-6 flex flex-col items-center">
              <label
                htmlFor="zip-code"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Enter Zip Code:
              </label>
              <input
                type="number"
                id="zip"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
          <div role="status">
            {loadingBusinesses && (
              <>
                <svg
                  aria-hidden="true"
                  className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap justify-center">
            {halalBusinesses.map((business: any) => (
              <div className="mx-2 mb-4 flex w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow">
                <a href="#"></a>
                <div className=" flex flex-col  p-5">
                  <a href="#">
                    <img
                      className="h-20 w-20"
                      src={business.image_url}
                      alt=""
                    />
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {business.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {business.location.address1}
                    </p>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">
                    {business.price}
                  </p>
                  <p className="mb-3 font-normal text-gray-700">
                    ⭐ {business.rating}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    {business.phone}{" "}
                    <svg
                      className="ml-2 h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
