import { useEffect, useState } from "react"

export const useUserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/users"

        const fetchUsers = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setUsers(json)
        };
    
        fetchUsers();
    }, []);

    return users
}