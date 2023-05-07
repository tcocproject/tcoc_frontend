

export  interface Register{
    firstName: string,
    lastName: string,
    email:string
    phoneNumber: string,
    password: string,
    confirmPassWord: string,
    companyId:string,
    country: string,
    role:string
}
export  interface Login{
    email: string,
    password: string,
    remember: boolean,
}

export interface ForgotPassword{
    email: string,
    type: number
}
export interface EmailConfirmOTP{
    email: string,
    otp: string,
    type: number
}


