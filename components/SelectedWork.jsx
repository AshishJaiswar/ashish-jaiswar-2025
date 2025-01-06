import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import recifood from "@/public/recifood.jpg";
import gamehub from "@/public/gamehub.jpg";

const SelectedWork = () => {
  return (
    <div className=" bg-bisque px-5 pt-5 md:px-32">
      <h1 className="text-3xl mb-10">Selected Works</h1>
      <div className="lg:grid grid-cols-2 gap-4 py-4">
        <Card className="mb-6">
          <CardContent className="p-2 rounded-lg bg-flora-white">
            <Image src={recifood} className="rounded-lg" alt="Recifood" />
            <h4 className="mt-4 mb-2 font-semibold text-gray-800">
              Recifood - Random recipe and recipe search App
            </h4>
            <p className="text-gray-600 text-sm">
              Recifood, your ultimate culinary companion, is not just a random
              food picker and recipe search app.
            </p>
            <div className="mt-4 mb-2">
              <Link
                className="bg-gray-900 hover:bg-gray-600 transition text-gray-100 px-8 py-2 rounded-lg"
                href="https://recifood-ruby.vercel.app/"
              >
                Visit
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-6">
          <CardContent className="p-2 rounded-lg bg-flora-white">
            <Image src={gamehub} className="rounded-lg" alt="Gamehub" />
            <h4 className="mt-4 mb-2 font-semibold text-gray-800">
              Gamehub - Your game library
            </h4>
            <p className="text-gray-600 text-sm">
              Game hub is a game library app built with React & Chakra UI using
              Rawg.io dataset.
            </p>
            <div className="mt-4 mb-2">
              <Link
                className="bg-gray-900 hover:bg-gray-600 transition text-gray-100 px-8 py-2 rounded-lg"
                href="https://game-hub-hazel-pi.vercel.app/"
              >
                Visit
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SelectedWork;
