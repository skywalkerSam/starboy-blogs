import "~/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/ui/theme-provider";
import Footer from "~/components/Footer";
// import { Ubuntu } from "next/font/google";
// import { Geist } from "next/font/google";
import { Paprika } from "next/font/google";
import { HOME_OG_IMAGE_URL } from "lib/constants";
// import { CMS_NAME} from "lib/constants";

// const ubuntu = Ubuntu({
//   weight: ["400", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });

// const geist = Geist({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
// });

const paprika = Paprika({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: "Starboy's Blog",
  description: "A Starboy's Blog.",
  // description: `Starboy's Blog with ${CMS_NAME}`,
  metadataBase: new URL("https://blog.skywalkersam.dev/"),
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${paprika.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-gradient-to-b from-transparent via-blue-400 to-transparent">
            {children}
          </main>

          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
