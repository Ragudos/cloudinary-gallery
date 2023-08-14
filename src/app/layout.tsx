import "./globals.css";

import * as React from "react";

import TopLoader from "nextjs-toploader";

import dynamic from "next/dynamic";
import type { Metadata } from "next";

import { ContextProvider } from "@/components/context-provider";
import { Header } from "@/components/header";
import { SideMenu } from "@/components/side-menu";

const AddToAlbumDialog = dynamic(() =>
  import("@/components/add-to-album-dialog").then((module) => {
    return module.AddToAlbumDialog;
  }),
);

export const metadata: Metadata = {
  title: "Cloudinary Gallery by PSanctuary",
  description: "Generated by create next app",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ContextProvider>
          <TopLoader color="hsl(240, 5.9%, 50%)" showSpinner={false} />
          <Header />
          <div className="flex flex-col lg:flex-row gap-2 items-start container min-h-[40rem]">
            <SideMenu />
            <div className="py-8 w-full">{children}</div>
            <React.Suspense>
              <AddToAlbumDialog />
            </React.Suspense>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
