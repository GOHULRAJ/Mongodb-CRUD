const {MongoClient}=require("mongodb");
const url="mongodb://localhost/27017";
const client=new MongoClient(url);

async function run(){
    try{
        const database=client.db("Gohul");
        const fsd=database.collection("MCA");

        const query=[{name:"kamaraj",address:"patavarthi"},
        {name:"gohul",address:"kokkur"},
        {name:"rangasamy",address:"mayiladuthurai"},
        {name:"paneerSelvam",address:"Nalladai"}]
        const result=await fsd.insertMany(query);
        console.log("No.of document inserted(via InsertMany) is:",result.insertedCount)
    }
    finally{
        await client.close();
    }
}
run().catch(console.dir);