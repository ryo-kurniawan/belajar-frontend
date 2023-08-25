// import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
    <Link
      to="/"
      className="block md:inline-block px-3 py-2 rounded-md  focus:text-orange-400 hover:text-orange-400"
    >
      Home
    </Link>
    <Link
      to="/news"
      className="block md:inline-block px-3 py-2 rounded-md  focus:text-orange-400 hover:text-orange-400"
    >
      Berita 1
    </Link>
    <Link
      to="/news"
      className="block md:inline-block px-3 py-2 rounded-md  focus:text-orange-400 hover:text-orange-400"
    >
      Berita 2
    </Link>
    <Link
      to={"/linktree"}
      className="block md:inline-block px-3 py-2 rounded-md focus:text-orange-400 hover:text-orange-400 "
    >
      Link Tree
    </Link>
  </div>
  )
}

export default Menu