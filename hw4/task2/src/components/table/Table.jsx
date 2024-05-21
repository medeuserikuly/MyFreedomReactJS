import './table.css'

const Table = ({usersData, sortBy, setSelectedUser}) => {
    const getUserDataByClick = (userData) => {
        setSelectedUser(userData)
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => sortBy('id')}>ID</th>
                    <th onClick={() => sortBy('name')}>Name</th>
                    <th onClick={() => sortBy('username')}>UserName</th>
                    <th onClick={() => sortBy('email')}>Email</th>
                    <th onClick={() => sortBy('street')}>Address</th>
                </tr>
            </thead>
            <tbody >
                {usersData.map((user) => (
                    <tr key={user.id} onClick={() => getUserDataByClick(user)}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{`${user.street}, ${user.city}`}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
}

export default Table;
