
import rain from '../helpers/icons/iconfinder_Raining_5729383.png'
import thunderStorm from '../helpers/icons/iconfinder_Lightning_Cloudy_5729387.png'
import clearSky from '../helpers/icons/iconfinder_Sunny_5729378.png'
import brokenClouds from '../helpers/icons/iconfinder_Cloudy_Sunny_5729392.png'
import fewClouds from '../helpers/icons/iconfinder_Cloudy_5729391.png'
import snow from '../helpers/icons/iconfinder_Snowing_5729381.png'
import mist from '../helpers/icons/iconfinder_Foggy_Cloud_5729389.png'
import showerRain from '../helpers/icons/iconfinder_Raining_Moon_5729384.png'



export const iconList = ['clear sky', 'few clouds', 'scattered clouds', 'thunderstorm', 'broken clouds', 'shower rain', 'rain', 'snow', 'mist', 'light rain']

export const iconImages = [clearSky, fewClouds, brokenClouds, thunderStorm, showerRain,  rain, snow, mist]

export const weatherIconHandler = (weather, setIcon) => {
    
   return  weather === iconList[0] ? setIcon(iconImages[0])
         : weather === iconList[1] ? setIcon(iconImages[1])
         : weather === iconList[2] ? setIcon(iconImages[2])
         : weather === iconList[3] ? setIcon(iconImages[3])
         : weather === iconList[4] ? setIcon(iconImages[2])
         : weather === iconList[5] ? setIcon(iconImages[4])
         : weather === iconList[6] ? setIcon(iconImages[5])
         : weather === iconList[7] ? setIcon(iconImages[6])
         : weather === iconList[8] ? setIcon(iconImages[7])
         : weather === iconList[9] ? setIcon(iconImages[5])
         : null

}