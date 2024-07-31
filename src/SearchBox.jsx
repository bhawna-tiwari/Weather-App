import TextField from "@mui/material/TextField";
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error,seterror]=useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3b0b79062742d2bfd49e62a0dc6398b5";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch(err){
      throw err;
    }
    
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    if (newInfo) updateInfo(newInfo);
    }catch(err){
      seterror(true);
    }
  };

  return (
    <div className="Searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br/><br/>
        <span className="button"> 
        <Button  variant="contained" type="Submit" >
          Search
        </Button>
        </span>
        { error && <p style={{color: "red"}}> No such Data is found </p>}
      </form>
    </div>
  );
}

