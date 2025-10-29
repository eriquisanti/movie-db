import { Container } from "@/components/container";

export function LoadingPage() {
  return (
    <Container>
      <div className="flex flex-col gap-10 md:flex-row md:gap-4">
        <section className="flex justify-center w-full h-[600px] overflow-hidden md:w-2/4 md:justify-end">
          <div className="w-full h-full bg-gray-800 animate-pulse rounded-2xl"></div>
        </section>
        <section className="flex-1 flex flex-col">

          <div className="flex flex-col gap-2 mb-10">
            <div className="animate-pulse w-82 h-12 bg-gray-700 rounded"></div>
          </div>
          <div className="md:flex-1">
            <div className="mb-10">
              <div className="animate-pulse w-52 h-4 bg-gray-700 rounded mb-2"></div>
              <div className="animate-pulse w-40 h-4 bg-gray-700 rounded"></div>
            </div>
            <div className="animate-pulse w-20 h-6 bg-gray-700 rounded mb-4"></div>
            <div className="animate-pulse w-full h-40 bg-gray-700 rounded mb-10"></div>
          </div>

          <div className="animate-pulse  h-10 bg-gray-700 rounded mt-4 md:w-48"></div>
        </section>
      </div>
    </Container>
  )
}