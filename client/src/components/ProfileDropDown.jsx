import React from 'react'
import { Menu } from '@mantine/core';
import { Avatar } from '@mantine/core'
import { LogOut, Settings } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { signOut } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const ProfileDropDown = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
        navigate('/login')
    }

    return (
        <div>


            <Menu shadow="md" width={200}>
                <Menu.Target>
                    <Avatar className='cursor-pointer' />
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>My Profile</Menu.Label>
                    <Menu.Item leftSection={<Settings size={14} />}>
                        Settings
                    </Menu.Item>




                    <Menu.Divider />

                    <Menu.Label>Danger zone</Menu.Label>
                    <Menu.Item
                        leftSection={<LogOut size={16} />}
                        color="red"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default ProfileDropDown