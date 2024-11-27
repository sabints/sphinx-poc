import apiClient from '../../services/apiClient'

export const authUser = async () => {
    const { authResposne } = await apiClient.get('/authenticat-user');
    return authResposne;
}