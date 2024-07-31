import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Striped_Sun_at_Summer_Solstice_2016.jpg/220px-Striped_Sun_at_Summer_Solstice_2016.jpg";

  const HOT_URL="https://media.istockphoto.com/id/979270938/photo/sun-light-on-dramatic-moody-sky-with-cloud.jpg?s=612x612&w=0&k=20&c=ysbKRPY9ZFsnU-mu8Rp4EXb14sxDgJVtjOVP14tXSxY=";
  const COLD_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhu978cwoOsyxc2Z_inR_ebC6JHCwaqPwTPA&s";
  const RAIN_URL="https://cff2.earth.com/uploads/2018/11/12235505/what-is-rain.jpg";
  return (
    <div className="InfoBox">
      <Card  sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
          info.humidity>80
          ? RAIN_URL
          :info.temp>15
          ? HOT_URL
          : COLD_URL
        }
          title="Weather App"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="Black" component={"span"}>
            <p>Temperature={info.temp}&deg;C</p>
            <p>Humidity={info.humidity}</p>
            <p>Min Temp={info.tempMin}</p>
            <p>Max Temp={info.tempMax}</p>
            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
