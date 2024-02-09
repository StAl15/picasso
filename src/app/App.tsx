import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {PostDetail} from '../pages/postDetail/PostDetail';
import {Posts} from '../pages/posts/Posts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'/posts/:id'} element={<PostDetail/>}/>
                <Route path={'/*'} element={<Navigate to={'/posts'}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
