import AxRequest from "./sealaxios"


const BASE_URL = 'http://localhost:88'
const TIME_OUT = 5000


const instance = new AxRequest({
    baseURL: BASE_URL,
    timeout : TIME_OUT,
    interceptors: {
        requestInterceptors(config){
           console.log(config, '成了')
            return config
        },
        requestInterceptorsCatch(){
            console.log('败了')
        },
        responseInterceptors(config){
            console.log(config , '回来了')
            return config
        },
        responseInterceptorsCatch(){
            console.log('丢了')
        }
    }
  })

 export {instance}