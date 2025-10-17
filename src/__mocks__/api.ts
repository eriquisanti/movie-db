import type { Movie } from "../types/movie-list";
import type { MovieDetails } from "../types/movie-details";

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    overview: "A thief who steals corporate secrets through dream-sharing technology...",
    poster_path: "/inception.jpg",
    backdrop_path: "/inception-backdrop.jpg",
    release_date: "2010-07-16",
    vote_average: 8.8,
    vote_count: 2000,
    popularity: 85.5,
    adult: false,
    genre_ids: [28, 878],
    original_language: "en",
    original_title: "Inception",
    video: false
  },
  {
    id: 2,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels...",
    poster_path: "/matrix.jpg",
    backdrop_path: "/matrix-backdrop.jpg",
    release_date: "1999-03-30",
    vote_average: 8.1,
    vote_count: 20500,
    popularity: 60.4,
    adult: false,
    genre_ids: [28, 878],
    original_language: "en",
    original_title: "The Matrix",
    video: false
  }
];

export const mockMovieDetails: MovieDetails = {
  id: 1,
  title: "Inception",
  overview: "A thief who steals corporate secrets through dream-sharing technology...",
  poster_path: "/inception.jpg",
  backdrop_path: "/inception-backdrop.jpg",
  release_date: "2010-07-16",
  vote_average: 8.8,
  vote_count: 2000,
  popularity: 85.5,
  adult: false,
  original_language: "en",
  original_title: "Inception",
  video: false,
  runtime: 148,
  budget: 160000000,
  revenue: 836836967,
  homepage: "https://inception.movie",
  tagline: "Your mind is the scene of the crime",
  status: "Released",
  belongs_to_collection: null as any,
  imdb_id: "tt1375666",
  origin_country: ["US"],
  genres: [
    { id: 28, name: "Action" },
    { id: 878, name: "Science Fiction" }
  ],
  production_companies: [
    {
      id: 923,
      name: "Legendary Entertainment",
      logo_path: "/legendary.png",
      origin_country: "US"
    }
  ],
  production_countries: [
    { iso_3166_1: "US", name: "United States of America" }
  ],
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English",
      english_name: "English"
    }
  ]
};