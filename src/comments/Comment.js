export default function Comment({item:{postId, id, name, email, body}}) {
    return (
        <div className='commentCard'>
            <h3>Коментр до {postId} поста</h3>
            <p>Коментар {id}</p>
            <p>Від користувача {name}  {email}</p>
            <p className='commentBody'>{body}</p>
        </div>
    )
}