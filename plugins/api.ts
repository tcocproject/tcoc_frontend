import { Plugin } from '@nuxt/types';
import AuthModule from '../repository/factory';


declare module '@nuxt/types' {
    interface Context{
        $apiInstance : AuthModule
    }
}
const apiPlugin: Plugin = (context) => {
     context.$apiInstance = new AuthModule()
 }

 export default apiPlugin