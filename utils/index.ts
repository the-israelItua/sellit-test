import { ReactNode } from "react"


const truncate = (str: string) => {
    return str.length > 30 ? `${str.substring(0,30)}...` : str
} 

const per_page_limit = 4




export {truncate, per_page_limit }