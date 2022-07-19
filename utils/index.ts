const truncate = (str: string) => {
    return str.length > 30 ? `${str.substring(0,30)}...` : str
} 

export {truncate}