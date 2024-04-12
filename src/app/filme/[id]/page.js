"use client"
import React from 'react';
import { useEffect, useState } from "react";
import api from "@/tools/api";

export default function Filme({ params }) {

    const id = params.id;

    const [filme, setFilme] = useState({});

    const getFilme = async () => {
      api
            .get(`/3/movie/${id}`)
            .then((resposta) => {
                setFilme(resposta.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getFilme();
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filme.map((filme) => (
          <article
            key={filme.id}
            className="flex flex-col"
            onClick={() => {
              router.push(`/filme/${filme.id}`);
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
              width={500}
              height={750}
            />
            <h2 className="text-xl font-semibold">{filme.title}</h2>
            <p>{filme.overview}</p>
          </article>
        ))}
            </section>
        </main>
    )
}