import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "~/components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ClerkProvider>
      {" "}
      <div className="mx-auto flex min-h-screen justify-center bg-slate-900">
        <div className="min flex w-full max-w-[1400px] flex-col gap-9 px-10 py-8 md:gap-20 md:py-16">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
