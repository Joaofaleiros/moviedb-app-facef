"use client"
import React from 'react';
import { useEffect, useState } from "react";
import api from "@/tools/api";
import Image from 'next/image';

export default function Filme({ params }) {

    const id = params.id;

    const [filme, setFilme] = useState({});

    const getFilme = async () => {
      api
            .get(`/3/movie/${id}`)
            .then((resposta) => {
                setFilme(resposta.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getFilme();
    }, []);

    console.log(filme)

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <section className="flex min-h-screen justify-center">
                <article className="flex flex-col items-center">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                        alt={filme.title}
                        width={300}
                        height={300}
                        />
                    <h2 className="text-xl font-semibold">{filme.title}</h2>
                    <p>{filme.overview}</p>
                </article>
            </section>
        </main>
    )
}