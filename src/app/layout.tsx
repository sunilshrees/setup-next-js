import { Modal } from "@/components/modal/modal";
import { ModalProvider } from "@/components/modal/modal-context";
import { ConfirmationDialogProvider } from "@/providers/ConfirmationDialogContext";
import QueryWrapper from "@/providers/queryWrapper";
import { Manrope } from "next/font/google";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import AppHydrationWrapper from "@/components/AppHydrationWrapper";
import { Toaster } from "@/components/ui/sonner";

const primary = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${primary.variable}`}>
      <head>
        <title>Matilda Care</title>
      </head>
      <body suppressHydrationWarning={true}>
        <QueryWrapper>
          <ConfirmationDialogProvider>
            <ModalProvider>
              <ToastContainer
                closeOnClick={false}
                draggable={false}
                hideProgressBar={true}
                closeButton={false}
                position="top-right"
                autoClose={5000}
              />
              <AppHydrationWrapper>
                {children}
                <Modal />
              </AppHydrationWrapper>
            </ModalProvider>
          </ConfirmationDialogProvider>
        </QueryWrapper>
      </body>
    </html>
  );
}
