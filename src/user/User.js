
import './User.css'

export default function User({item:{id, name, username, email, address, phone, website, company}}) {
    return (
        <div className='userCard'>

            <h3>
                {name}
            </h3>
            <p>
                {username}
            </p>
            <p>
                {phone}
            </p>
            <p>
                {email}
            </p>




        </div>
    )


}