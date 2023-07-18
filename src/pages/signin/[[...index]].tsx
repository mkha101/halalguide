import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <SignIn
        signUpUrl="/signup"
        redirectUrl="/"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue",
            card: "text-white",
            footer: "p",
          },
        }}
      />
    </div>
  );
}
