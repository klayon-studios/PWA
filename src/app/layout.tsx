import NavBar from "@/components/nav-bar";
import TopBar from "@/components/user-bar";
import Providers from "@/components/Provider";
import { SiteConfig } from "@/config/site";
import "/styles/globals.css";

export const metadata = {
  title: SiteConfig,
  description: SiteConfig.description,
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopBar />
          {children}
          <NavBar />
        </Providers>
      </body>
    </html>
  );
}
