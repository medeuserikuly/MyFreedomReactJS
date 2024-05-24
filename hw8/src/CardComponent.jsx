import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions';

const Comment = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <>
            <Button onClick={() => dispatch(getComments())}  type="primary">Get Comments</Button>
            {
                state && state.map(comment => (
                    <Card key={comment.id}  title={comment.name} style={{ width: 300 }}>
                        <p>{comment.body}</p>
                    </Card>
                ))
            }

        </>
    );
}

export default Comment;
