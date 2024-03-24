import mongoose from "mongoose";
const localhost = process.env.LOCALHOST 

async function main(){
    await mongoose.connect(`mongodb://${localhost}:27017/wefood`)
    console.log('conectou ao mongoose! ')
}

main().catch((err) => console.log(err))

export { mongoose }