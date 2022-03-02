

export function setLocalStorage(key:string, value:any){
    window.localStorage.setItem(key, JSON.stringify(value))
}


export function getLocalStorage(key:string){
  const value  = window.localStorage.getItem(key);
  if(value){
    return JSON.parse(value)
  } else {
      return null 
  }
}


export function removeLocalStorage(key:string){
    window.localStorage.removeItem(key)
}


export function clearCache(){
    window.localStorage.clear()
}

