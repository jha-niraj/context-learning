import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserConext';

const ProfilePage = () => {
    const { user } = useContext(UserContext);

    if(!user) {
        return;
    }

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontFamily: 'Arial, sans-serif'
        },
        username: {
            fontSize: '32px',
            fontWeight: 'bold'
        }
    };

    return (
        <div style={styles.container}>
            <p style={styles.username}>{user?.username}</p>
        </div>
    );
};

export default ProfilePage;