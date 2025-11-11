import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../lib/stores/authStore.js';

const LogOutButton = () => {
    const logout = useAuthStore(state => state.logout);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await logout();
        navigate('/sign-in');
    }

    return (
        <button onClick={handleSignOut}>Sign out</button>
    )
}

export default LogOutButton