import NavBar from "@/components/nav-bar";
import "/styles/globals.css";
import TopBar from "@/components/user-bar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
        <NavBar />
      </body>
    </html>
  );
}
