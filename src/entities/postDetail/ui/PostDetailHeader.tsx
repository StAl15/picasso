import {useNavigate, useParams} from "react-router";
import {usePostDetail} from "../model/use-post-detail";

export const PostDetailHeader = () => {

    const params = useParams();
    const navigate = useNavigate();
    const {
        post,
        isError,
        isLoading
    } = usePostDetail(Number(params['id']));

    return (
        <div className={'items-start flex flex-col space-y-4'}>
            <p
                className={'cursor-pointer text-blue-600'}
                onClick={() => navigate(-1)}>
                Назад
            </p>
            <h3 className={'text-2xl'}>
                {isLoading
                    ? 'Загрузка...'
                    : `${post?.id}. ${post?.title}`
                }
                {isError && 'Ошибка'}
            </h3>
        </div>
    );
};
