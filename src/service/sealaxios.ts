import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig} from "axios"
import type {sealInterceptors, AddInterceptorsConfig} from './type'

class AxRequest {
    // instance: AxiosInstance
    // interceptors?: sealInterceptors

    // interceptors?: sealInterceptors

    constructor(config: AddInterceptorsConfig){
        // this.instance = axios.create(config)
        // this.interceptors = config.interceptors
        // this.instance.interceptors.request.use(
        //     this.interceptors?.requestInterceptors,
        //     this.interceptors?.requestInterceptorsCatch
        // )
        // this.instance.interceptors.response.use(
        //     this.interceptors?.responseInterceptors,
        //     this.interceptors?.responseInterceptorsCatch
        // )
    }

    request(config?: AxiosRequestConfig){
        // this.instance.request(config!).then((value:any) => {
            
        // })
    }
}
class Person {
    name: string //和JAVA类似,要先在这声明对象中拥有的属性和类型
    /*该属性定义相当于public name:string;,只不过省略了public,下面再做解释*/
    constructor(n: string) {
      this.name = n //和ES6一样,传入构造函数,只不过需要在前面先定义this的属性
    }
  
    run(): void {
      console.log(this.name)
    }
  }
export default AxRequest