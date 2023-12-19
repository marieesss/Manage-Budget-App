// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'


export interface PostRequest{
    username : string, 
    email: string, 
    password : string,
    isAdmin? : boolean
}      

export default class PostsController {
    public async index(){
        return "Hello"
    }

    public async post(request: PostRequest){
        const user = new User();
        const {username, email, password, isAdmin} = request;
        user.email = email;
        user.password = password;
        user.username = username;
        user.isAdmin = isAdmin

        await user.save()

        return user
    }
}
