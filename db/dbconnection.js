// db server integration 

const mongoose=require('mongoose')

// connect with mongodb atlas
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("....Mongodb Atlas Connected ......");
}).catch(()=>{
    console.log("....mongodb connection error....");
})
