import AxRequest from "./sealaxios";


const upload = new AxRequest({
  baseURL: 'http://localhost:3000',
  interceptors: {
    requestInterceptors(config){
        return config
    },
    requestInterceptorsCatch(){
        console.log('败了')
    },
    responseInterceptors(config){
        return config.data
    },
    responseInterceptorsCatch(){
        console.log('丢了')
    }
}
})


export function uploadFunction(file:any) {
  upload.post({
    url:'/upload',
    params: file,
    headers:{
      'content-type': 'multipart/form-data'
    }
  })
}
