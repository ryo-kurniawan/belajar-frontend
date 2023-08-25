 import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  

import Navbar from "../components/Navbar"

const supabase = createClient("https://pmrnvrtvkhjfxyrzcght.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtcm52cnR2a2hqZnh5cnpjZ2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5MjYzMDIsImV4cCI6MTk5NzUwMjMwMn0.ZXys0HbWxLxbnvmbO-XljG5m-Q389E6vNr8TOXyuijY");

const Home = () => {

  const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select('*');
      setCountries(data);
    }
  return (
    <>
    <Navbar/>
    <ul >
        {countries.map((country) => (
          <li className="flex justify-center"  key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Home