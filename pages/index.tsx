import React, { useEffect, useState } from "react"
import Main from "./main"
import axios from "axios"

const apikey = process.env.API_KEY

interface Iweather{
  temp:string;
  main:any;
  weather:any;
  name: string;
}

export default function Home() {
  const [input, setInput] = useState('')
  const [weatherState, setWeather] = useState<Iweather>()

  function HandleClick(){
    getWeather()
  }

  async function getWeather(){
    try{
    const getApiKey = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input || 'Brasil'}&units=metric&appid=${apikey}&lang=pt_br`)
    const ApiData = getApiKey.data
    console.log(apikey)
    setWeather(ApiData)
    console.log(weatherState)
    } catch{
      console.log('Error')
    }
  }

  useEffect(() =>{
    getWeather()
  }, [])

  return (
    <div className="container">
      <Main 
        inputValue={input}
        SetInputValue={setInput}
        handleClick={HandleClick}
        discription={weatherState?.main?.temp || ''} 
        tempMax={weatherState?.main?.temp_max} 
        tempMin={weatherState?.main?.temp_min}
        Statename={weatherState?.name}
        Time={weatherState?.weather[0].description.toUpperCase()}
        />
    </div>
  )
}
