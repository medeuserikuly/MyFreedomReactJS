import { Card, Col, Row, Modal, Button, Input  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const CardComponent = () => {
    const { TextArea } = Input;

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const posts = useSelector(state => state)
    const dispatch = useDispatch()

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentPostId, setCurrentPostId] = useState(null);

    const showModal = (post) => {
        setCurrentPostId(post.id);
        setEditTitle(post.title);
        setEditBody(post.body);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        dispatch({ type: 'UPDATE', id: currentPostId, title: editTitle, body: editBody });
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Row gutter={16}>
                {posts.map(post => (
                    <Col key={post.id} span={6}>
                        <Card title={post.title} bordered={false} style={{marginBottom: '30px'}}>
                            {post.body}
                        </Card>

                        <Button 
                            type="primary" 
                            danger 
                            onClick={() => dispatch({ type: 'DELETE', id: post.id })}>
                            Удалить
                        </Button>

                        <Button type="dashed" onClick={() => showModal(post)}>Изменить</Button>
                    </Col>
                ))}
            </Row>

            <h2 style={{marginTop: '50px'}}>Добавить Пост</h2>
            <Input style={{marginTop: '10px'}} placeholder="Post Title" onChange={(e) => setTitle(e.target.value)}/>
            <TextArea rows={4} placeholder='Post Body' onChange={(e) => setBody(e.target.value)}/>
            <Button onClick={() => dispatch({type: 'ADD', id: uuidv4(), title: title, body: body})} type="primary">Добавить</Button>

            <Modal title="Изменить пост" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input style={{marginBottom: '10px'}} placeholder="Post Title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                <TextArea rows={4} placeholder='Post Body' value={editBody} onChange={(e) => setEditBody(e.target.value)} />
            </Modal>
        </>
    );
}

export default CardComponent;
