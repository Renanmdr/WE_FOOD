import { User } from '../models/User.js'


export  class UserController {
    static async resgister(req, res){
        const {name, email, password, confirmpassword} = req.body

        if(!name){
          return  res.status(422).json({message: 'O nome é obrigatorio!'})

        }

        if(!email){
          return  res.status(422).json({message: 'O e-mail é obrigatorio!'})

        }

        if(!password){
          return  res.status(422).json({message: 'A senha é obrigatoria!'})

        }

        if(!confirmpassword){
          return  res.status(422).json({message: 'A confirmação de senha é obrigatoria!'})

        }

        if(password !== confirmpassword){
          return  res.status(422).json({message: 'A senha e a confirmação de senha precisam ser iguais!!'})

        }

        // check if user exists

        const userExists = await User.findOne({email})

        if(userExists){
         return  res.status(422).json({message: 'Por favor, utilize outro e-email'})
        }

        
    }
}