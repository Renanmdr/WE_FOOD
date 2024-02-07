import mongoose from "mongoose";

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wefood')
    console.log('conectou ao mongoose! ')
}

main().catch((err) => console.log(err))

export { mongoose }