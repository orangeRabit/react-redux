import User from "../user/User";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../api/Api";
import './Users.css'
export default function Users() {
    const users = useSelector(({users}) =>users )
    const dispatch = useDispatch()
    // const fetchUsers = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const userJson = await response.json()
    //
    //     dispatch({
    //         type: 'USERS_LIST',
    //         payload: userJson
    //
    //     })
    // }
    useEffect(() => {
        getUsers().then(value => dispatch({
            type: 'USERS_LIST',
            payload: value.data
        }));
    }, [])



    return (

        <div>
            <div className='usersHeder'>
                <h4>Ім'я</h4>
                <h4>Нікнейм</h4>
                <h4>Телефон</h4>
                <h4>Ел. пошта</h4>
            </div>
            {users.map(value => <User key={value.id} item={value}/>)}


        </div>
    )

}