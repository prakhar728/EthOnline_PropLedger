const {main,propertyMetaData} = require("./mongo");


export async function GET(request:Request) {
    return new Response("This is workings")
}


main();
