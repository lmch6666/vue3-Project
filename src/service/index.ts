import AxRequest from "./sealaxios"


const instance = new AxRequest({
    baseURL: ' http://localhost:5000',
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

 export {instance}
