import './Comment.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../api/Api";
import Comment from "../comments/Comment";

export default function Comments() {
    const comments = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        getComments().then(resp => dispatch({
            type: 'COMMENTS_LIST',
            payload: resp.data
        }))
    },[])
    return(

        <div>
            {comments.map(value => <Comment key={value.id} item={value}/> )}
        </div>
    )
}