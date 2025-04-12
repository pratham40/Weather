import axios from "axios";
import { Router } from "express";

const router = Router();


router.get("/",async (req,res) => {
    try {
        const city = req.query?.city
        
        if (!city) {
            return res.status(400).json({
                error:"Please provide a city name"
            })
        }
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    
        const response = await axios.get(url)
        console.log(response.data.weather[0]);
        
        const {temp,humidity}=response.data.main
    
        const {speed} = response.data.wind
    
        const {description,icon}=response.data.weather[0]
    
    
        return res.status(200).json({
            city:response.data.name,
            temperature:temp,
            humidity,
            wind_speed:speed,
            condition:description,
            icon,
        })
    } catch (error) {
        return res.status(500).json({
            error:"Something went wrong Please try again later"
        })
        
    }
})


export default router