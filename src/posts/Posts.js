import Post from "../post/Post";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../api/Api";

export default function Posts() {
    const posts = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        getPosts().then(resp => dispatch({
            type: 'POSTS_LIST',
            payload: resp.data
        }))
    }, [])
    return(


        <div>
            {posts.map(value => <Post key={value.id} item={value}/> )}
        </div>
    )
}