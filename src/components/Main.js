import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import Emojis from "../assets/Emojis";
import "../assets/style.css";

function Main() {
  const [copiedEmoji, setCopiedEmoji] = useState(null);
  const [filter, setFilter] = useState("");

  const handleCopy = async (emoji) => {
    await navigator.clipboard.writeText(emoji);
    setCopiedEmoji(emoji);
  };

  const filteredEmojis = Emojis.filter(emoji =>
    emoji.keywords.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="min-h-screen">
      <div className="flex items-center justify-center pt-8">
        <div className="text-center">
          <img src="/Images/cactus-emoji-1.png" alt="Cactus-emoji" className="floating h-auto w-32 lg:w-60 md:w-52 sm:w-40 mx-auto" />
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-4xl lg:text-5xl text-white">
            Welcome to <span className="text-green-500">Emoji</span> Explorer
          </h1>
          <p className="max-w-sm md:max-w-2xl mx-auto leading-none mb-6 px-8 font-normal text-white lg:mb-8 text-xs md:text-lg lg:text-lg">
            Discover your ideal emoji by searching keywords or emotions. Explore our extensive library for hidden gems and easily express yourself by copying and pasting emojis anywhere.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-xl m-auto px-8 sm:px-0">
        <div className="relative col-span-2 px-3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Search className="ml-2.5 w-4 h-4 fill-white " />
          </div>
          <input placeholder="Search for emojis here..." className="text-md w-full text-white bg-gray-900/20 ps-10 px-3 py-2.5 border border-gray-300 rounded-lg block placeholder-gray-400 outline-none"
            onChange={e => setFilter(e.target.value)} />
        </div>
      </div>

      {filter ? (
        <div className="w-full mt-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
              {filteredEmojis.map((emoji, index) => (
                <div key={index} className="relative shadow-md shadow-black hover:shadow-lg hover:shadow-black backdrop-blur-sm bg-gray-900/20 p-8 rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 text-yellow-300 text-5xl flex items-center justify-center"
                  onClick={() => handleCopy(emoji.symbol)}>
                  {emoji.symbol}
                  {copiedEmoji === emoji.symbol && (
                    <span className="absolute bottom-0 left-0 rounded-tr-md rounded-bl-md backdrop-blur-sm bg-green-500">
                      <p className="text-sm text-white px-1.5 py-0.5">Copied</p>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : ""}

    </section>
  )
}

export default Main;