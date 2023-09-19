import { useState, useEffect } from 'react'

const ItemListContainer = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) {
                    throw new Error("fallo")
                }
                const data = await response.json();
                setUsers(data)
            } catch (Error) {
                console.error(Error)
            }

        }
        fetchData();
    }, [])


    return (

        <div>
            <h2>   LISTA DE USUARIOS </h2>


            {users.map((u) => (
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <div className="card" KEY={u.id}>
                                <div className="card-body" >
                                    <h5 className="card-title">{u.name}</h5>
                                    <p className="card-text">{u.email}</p>
                                    <a href="#" className="btn btn-primary">{u.company.name}</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>




            ))}


            ItemListContainer
        </div>
    )

}
export default ItemListContainer