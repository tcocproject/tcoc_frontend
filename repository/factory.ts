import axios, { AxiosResponse } from 'axios';



class HttpFactory{
   private static  _defaultHeader:{'Content-Type':string,'Authorization'?:string } = {
    'Content-Type': 'application/json'
    }
    
    private static get _token() {
        return this._getToken();
    }

    private static _getToken = () => {
        let token = "this is the token"
        return token;
    }

    static async request<T>(method:any, url: string, data?: object, useToken: boolean = false):Promise<AxiosResponse<any>> {
        if (useToken) {
          this._defaultHeader['Authorization'] = `Bearer ${this._getToken}`
        }
        const baseUrl: string = `https://api.thetcoc.com/api/v1${url}`;
        console.log(baseUrl);
        const res: AxiosResponse<any> | any = await axios({
            url: baseUrl,
        method: method,
            headers: this._defaultHeader,
            data: data
        }).catch((e) => {
          return e.response
        })
        
        console.log(res);
        return res
    }

    
}
export default HttpFactory;