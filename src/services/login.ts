import { User } from '@/core/interfaces'
import { LoginUser } from '@/core/interfaces/responses/login'

export const loginApi = async (payload: User): Promise<LoginUser> => {
    const response = await fetch('https://cifrado.com.co/backend/public/api/test/login', {
        method: 'POST',
        body: JSON.stringify(payload),
    })
    const data = await response.json() as LoginUser
    return data
}
