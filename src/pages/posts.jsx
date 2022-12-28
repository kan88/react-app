import React, { useEffect, useState } from 'react';
import { Counter } from '../components/Counter';
import { Filter } from '../components/Filter';
import { FormCallBack } from '../components/FormСallback';
import { Input } from '../components/Input';
import { ItemsList } from '../components/ItemsList';
import { MyBtn } from '../components/ui/MyBtn/MyBtn';
import { MyModal } from '../components/ui/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import '../styles/app.css';
import { PostService } from '../API/PostService';
import { MyLoader } from '../components/ui/MyLoader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import { MyPagination } from '../components/ui/MyPagination/MyPagination';


function Posts() {

    //инициализируем состояние списка и прокинем 
    // в форму для работы с добавлением новых итемов и прокинем в список для отображения
    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    const sortedSearchingPosts = usePosts(posts, filter.sort, filter.query)

    useEffect(() => {
        fetchPosts()
    }, [page])


    const createPost = (newProp) => {
        setPosts(() => [...posts, newProp])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter((item) => post.id !== item.id))
    }

    const changePage = (data) => {
        setPage(data)
    }

    return (<div className='app'>
        <MyBtn onClick={() => setModal(true)}>
            Добавить пост
        </MyBtn>
        <Filter filter={filter} setFilter={setFilter} />
        <MyModal visible={modal} setVisible={setModal}>
            <FormCallBack createPost={createPost} />
        </MyModal>
        {postError &&
            <h1>Произошла ошибка `${postError}`</h1>
        }
        {isPostLoading
            ? <MyLoader />
            : <ItemsList removePost={removePost} posts={sortedSearchingPosts} title="Cписок постов" />
        }
        <MyPagination page={page} changePage={changePage} totalPages={totalPages} />
        <hr style={{ margin: '15px 0' }}></hr>
        <Counter />
        <Input />
    </div>);
}

export default Posts;