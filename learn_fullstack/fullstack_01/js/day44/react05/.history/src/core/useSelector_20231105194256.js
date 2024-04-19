import { ProviderContext } from "./Provider"
import { useContext } from "react"


export const aSelector = () => {
     return useContext(ProviderContext);

}