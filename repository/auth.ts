import { EmailConfirmOTP, ForgotPassword, Login, Register } from "~/types/credentials";
import HttpFactory from "./factory";


class AuthModule {

    private RESOURCE = '/authentication';
    async login(credentials: Login){
        return await HttpFactory.request('POST', `${this.RESOURCE}/login`, credentials)
    }
    async register(credentials: Register) {
        return await HttpFactory.request('POST', `${this.RESOURCE}/register`, credentials)
    }
    async passwordReset(credentials: ForgotPassword) {
        return await HttpFactory.request('POST', `${this.RESOURCE}/forget-password`, credentials)
    }

    async registrationOTP(credentials: EmailConfirmOTP) {
        return await HttpFactory.request('POST', `${this.RESOURCE}/confirm-email`, credentials)
    }
 
}
export default AuthModule;