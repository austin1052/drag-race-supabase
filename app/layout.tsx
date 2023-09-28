import App from "./App";
import Background from "@/app/_components/Background";
import Nav from "@/app/_components/Nav";
import { getSession } from "@/supabase/utils";
import { NavContextProvider } from "./_context/NavContext";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "Walk that Duck",
  description: "A drag race fantasy league",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <html lang="en">
      <body>
        <NavContextProvider>
          <Nav session={session} />
          <main className="">{children}</main>
          {/* <App session={session}>{children}</App> */}
        </NavContextProvider>
        <Background />
      </body>
    </html>
  );
}
