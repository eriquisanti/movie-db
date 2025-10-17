import { useParams } from "react-router";
import { Banner } from "./components/banner";
import { Flag } from "@/components/flag";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Icon } from "@/components/icon";
import { useGet } from "@/hooks/use-get";
import { formatDate } from "@/lib/utils";
import { useFavorites } from "@/providers";
import { LoadingPage } from "./components/loading-page";
import { APP_CONFIG } from "@/config/app-config";
import type { MovieDetails } from "@/types/movie-details";

export function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const { toggleFavorite, isFavorite } = useFavorites()

  if (!id) return <div>Movie not found</div>

  const { data, loading } = useGet<MovieDetails>(
    `/movie/${id}`,
    { language: APP_CONFIG.DEFAULT_LANGUAGE }
  )
  if (loading) return <LoadingPage />
  if (!data) return <div>Movie not found</div>

  const isFavorited = isFavorite(data?.id)

  function handleToggleFavorite() {
    if (!data) return;

    const movie = {
      adult: data.adult,
      backdrop_path: data.backdrop_path,
      genre_ids: data.genres.map(genre => genre.id),
      id: data.id,
      original_language: data.original_language,
      original_title: data.original_title,
      overview: data.overview,
      popularity: data.popularity,
      poster_path: data.poster_path,
      release_date: data.release_date,
      title: data.title,
      video: data.video,
      vote_average: data.vote_average,
      vote_count: data.vote_count,
    };

    toggleFavorite(movie);
  }

  return (
    <Container>
      <div className="md:flex md:gap-10">
        <section className="w-full h-[600px] flex flex-col items-center  mb-10 overflow-hidden md:mb-0 md:w-1/2 md:items-end">
          <Banner src={data.poster_path} />
        </section>
        <section className="flex-1 h-[600px]">
          <h2 className="text-3xl font-bold mb-4 text-white">{data?.title}</h2>
          <div className="flex gap-2 mb-10">
            {
              data?.genres.map((genre) => (
                <Flag className="bg-blue-500 text-white" key={genre.id}>{genre.name}</Flag>
              ))
            }
          </div>
          <div className="mb-10">
            <p className="text-gray-400 mb-2">Data de lançamento: <span>{formatDate(data?.release_date || "")}</span></p>
            <p className="flex gap-1 text-gray-400">Nota TMDB: <Flag>
              {data?.vote_average}
            </Flag></p>
          </div>
          {
            data?.overview && (
              <div className="mb-10">
                <p className="text-gray-300 text-md">Sinopse</p>
                <p className="text-gray-400">{data?.overview}</p>
              </div>
            )
          }

          <Button className="flex gap-1 items-center bg-red-500" onClick={handleToggleFavorite}>
            <Icon name="heart" fill={isFavorited ? "white" : undefined} />
            <p>{
              isFavorited ? "Remover dos Favoritos" : "Adicionar aos Favoritos"
            }</p>
          </Button>
        </section>
      </div>
    </Container>
  )
}