import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "./shared/components/toast/ToastContext";
import ToastContainer from "./shared/components/toast/ToastContainer";
import Header from "./shared/components/header/Header";
import SessionProvider from "./shared/providers/session-provider/SessionProvider";
import AuthProvider from "./shared/providers/auth-provider/AuthProvider";
import QueryProvider from "./shared/providers/query-provider/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apuesta Total",
  description: "Tu plataforma de apuestas deportivas en línea. Descubre las mejores cuotas, realiza tus apuestas y sigue la acción en tiempo real. ¡Únete a la emoción de las apuestas deportivas con Apuesta Total!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider>
          <QueryProvider>
            <ToastProvider>
              <AuthProvider>
                <div>
                  <Header />
                  <div className="flex-1 bg-gray-50">
                    {children}
                  </div>
                </div>
              </AuthProvider>
              <ToastContainer />
            </ToastProvider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html >
  );
}
