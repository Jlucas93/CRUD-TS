class UserDatabase {
    getuser = () => {
        return { name: 'João Lucas GET' }
    }
    getUserById = (id: number) => {
        return { name: `Lucas Andrade' - ${id}` }
    }
    postUser = () => {
        return { name: 'João lucas Post' }
    }
    updateUser = () => {
        return { name: 'João lucas Update' }
    }
    deleteUser = () => {
        return { name: 'João lucas Delete' }
    }
}

export const userDatabase = new UserDatabase();
