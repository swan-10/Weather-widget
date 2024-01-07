import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox ({info}) {
    const Initial_Url = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const hotUrl = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8Mg%3D%3D";
    const coldUrl = "https://images.unsplash.com/photo-1611156892136-45ad2d134bf8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainyUrl = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity > 80 ? rainyUrl : (info.temp > 15 ? hotUrl : coldUrl)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city.charAt(0).toUpperCase() + info.city.slice(1)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Country code = {info.country}</p>
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity}&#37;</p>
                        <p>Max Temperature = {info.tempMax}&deg;C</p>
                        <p>Min Temperature = {info.tempMin}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card> 
            </div>
            

        </div>
    )
}