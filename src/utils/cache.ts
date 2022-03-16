

export function setLocalStorage(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value))
}


export function getLocalStorage(key: string) {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value)
  } else {
    return null
  }
}


export function removeLocalStorage(key: string) {
  window.localStorage.removeItem(key)
}


export function clearCache() {
  window.localStorage.clear()
}



export function dingshiclear(jiange: number = 10000000) {
  let recordtime: any = window.localStorage.getItem('time');
  if (recordtime && (recordtime = JSON.parse(recordtime!) as number)) {
    if ((Date.now() - recordtime) > jiange) {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('Data')
      window.localStorage.removeItem('Menu')
      window.localStorage.removeItem('PermissionRouter')
      window.localStorage.removeItem('time')
    }
  } else {
    window.localStorage.setItem('time', JSON.stringify(Date.now()))
  }
}

