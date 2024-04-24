import { useUserList } from "../hooks/useUserList"

export const UserList = () => {

    const userList = useUserList()

    return  (
        <div>
            <ul>
                { userList.map((user) =>
                    <li key={user.id}>{`${user.name} - ${user.email}`}</li>
                ) }
            </ul>
        </div>
    
    )
}