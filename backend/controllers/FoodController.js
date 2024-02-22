import { getToken } from '../helpers/get-token.js'
import { getUserByToken } from '../helpers/get-user-by-token.js'
import { Food } from '../models/Food.js'


export class FoodController {
    static async create(req, res){
        const {name, ingredients, instructions, time, portions} = req.body

        // images upload
        console.log(name)
        // validations
        if(!name){
            return res.status(422).json({message: 'O nome é obrigatorio!'})
        }

        if(!ingredients){
            return res.status(422).json({message: 'Os igredientes são obrigatorios!'})
        }

        if(!instructions){
            return res.status(422).json({message: 'As instruções sãp obrigatorias!'})
        }

        if(!time){
            return res.status(422).json({message: 'O tempo de preparo é obrigatorio'})
        }

        if(!portions){
            return res.status(422).json({message: 'As porções são obrigatorias'})
        }

        // recipe owner
        const token = getToken(req)
        const user = await getUserByToken(token)
       
        const food = new Food({
            name,
            ingredients,
            instructions,
            time,
            portions,
            images: [],
            user: {
                _id: user._id,
                name: user.name,
                image: user.image
            }

        })

        try {
            const newFood = await food.save()
            res.status(201).json({message: 'Receita cadastrada com sucesso!', newFood})
        } catch (error) {
           return res.status(500).json({message: error})
        }
        
    }
}