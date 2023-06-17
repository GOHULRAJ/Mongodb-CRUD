const {MongoClient}=require("mongodb")
const url="mongodb://localhost/27017";
const client=new MongoClient(url);

async function run(){
    try{
        const database=client.db("Gohul");
        const fsd=database.collection("MCA");

        const query={name:"selva",address:"Mayiladuthurai"};
        const result=await fsd.insertOne(query);
        console.log("a document was inserted",result.insertedId);

    }
    finally{
        await client.close();
    }
}
run().catch(console.dir);