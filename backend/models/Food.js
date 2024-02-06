import { mongoose } from "../db/conn"
const { Schema } = mongoose

const Food = mongoose.model(
    'Food',
    new Schema(
        {
            name: {
                type: String,
                required: true
            },
            
            ingredients: {
                type: String,
                required: true
            },
            instructions: {
                type: String,
                required: true
            },
            time: {
                type: Number,
                required: true
            },
            portions: {
                type: Number,
                required: true
            },
            images: {
                type: Array,
                required: true
                
            },
            user: Object,
        },
        {timestamps: true}
    )
)


export {Food}