
export default async function UserPage({params}){
    console.log(params, "RR")
   try{
    const users = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
        )
   const userId = parseInt(params.id)
    const user = users.find((user)=> user.id === userId)
    

    return(
        <div>
            <h1>Name: {user.name}</h1>
            <h2>Age: {user.age}</h2>

        </div>
    )

   }
   catch (error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }
   
}