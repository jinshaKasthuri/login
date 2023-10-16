import * as Yup from 'yup'


export const login= Yup.object({
    name: Yup.string().min(5).max(15).required("enter your name"),
    email: Yup.string().email().required("enter your email"),
    Username: Yup.string().min(5).required("enter your username"),
    Password:Yup.string().min(5).required("enter your password"),
    confirm_password: Yup.string().min(5).required().oneOf([Yup.ref('password'),null],"password must match")

})
