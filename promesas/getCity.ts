import { City } from "../types/type.ts";

export const getCity = async(
    iso:string,postalcode:string):Promise<City> =>{

        const base_url = "https://zip-api.eu/api/v1/info"
        const url = `${base_url}/${iso}-${postalcode}`;
        const response = await fetch(url);
        if(response.status !==200){
            throw new Error("Cannot fetch location");
        }

        const data = await response.json();
        return{
            country_code:data.country_code,
            postal_code:data.postalcode,
            state:data.state,
            place_name:data.place_name,
            lat:data.lat,
            log:data.log
        }

    };
