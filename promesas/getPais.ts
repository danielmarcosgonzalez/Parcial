import { Pais } from "../types/type.ts";

export const getPais = async(
    iso:string,postalcode:string):Promise<Pais> =>{

        const base_url = "https://restcountries.com/v3.1/alpha"
        const url = `${base_url}/${iso}`;
        const response = await fetch(url);
        if(response.status !==200){
            throw new Error("Cannot fetch location");
        }

        const data = await response.json();
        return{
            nombre: data.name.official;
        }

    };
