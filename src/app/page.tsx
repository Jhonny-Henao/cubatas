import React from "react";
import Head from "next/head"; // Importa el componente Head
import LandingPage from "@/app/components/LadingPage";

export default function CubatasPage() {
    return (
        <div>
            {/* Modifica el título de la página */}
            <Head>
                <title>Mi Página de Cubatas</title>
            </Head>
            <LandingPage />
        </div>
    );
}
