import { ProviderContext } from "./Provider"
import { useContext } from "react"

export const uSelector = () => {
     return useContext(ProviderContext);

}