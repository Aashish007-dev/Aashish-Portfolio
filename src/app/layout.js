import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";


export const metadata = {
  title: "Personal Portfolio",
  description: "My Personal Portfolio Project",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
