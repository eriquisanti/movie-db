import { Container } from "../container";
import { Nav } from "./components/nav";
import { Search } from "./components/search";

export function Header() {
  return (
    <header className="w-full h-50 bg-gray-900 border-b-1 border-gray-700 md:h-20">
      <Container>
        <div className=" h-full flex flex-col items-center justify-around md:flex-row md:justify-between md:gap-5">
          <h1 className="text-2xl text-orange-500 font-bold">🎬 MovieDB</h1>
          <div className="h-10 w-full md:w-xl">
            <Search />
          </div>
          <Nav />
        </div>
      </Container>
    </header>
  )
}