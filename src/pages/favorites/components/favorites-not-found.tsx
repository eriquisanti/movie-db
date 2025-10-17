import { Button } from "@/components/button";
import { useNavigate } from "react-router";

export function FavoritesNotFound() {
  const navigate = useNavigate();
  function handleRedirect() {
    console.log('redirecting to /');
    navigate('/');
  }
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 gap-6">
      <h2 className="text-5xl">🎬</h2>
      <div className="text-gray-400 flex flex-col gap-2">
        <p>Nenhum filme favorito ainda</p>
        <p>Comece explorando filmes populares e adicione seus favoritos!</p>
      </div>
      <Button onClick={handleRedirect}>Explorar Filmes</Button>
    </div>
  )
}