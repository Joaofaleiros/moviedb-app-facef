"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import api from "@/tools/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    api
      .get("/3/movie/popular")
      .then((resposta) => {
        setMovies(resposta.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <article
            key={movie.id}
            className="flex flex-col"
            onClick={() => {
              router.push(`/filme/${movie.id}`);
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
            />
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p>{movie.overview}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
