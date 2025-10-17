import { BrowserRouter } from "react-router";
import { AppRoutes } from "@/routes";
import { Header } from "@/components/header";
import { Providers } from "@/providers";

export function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Header />
        <main className="bg-gray-900 pt-10 pb-10 min-h-screen">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </Providers>
  )
}
