import {usePostDetail} from "../model/use-post-detail";
import {useParams} from "react-router";

export const PostDetailBody = () => {

    const params = useParams();
    const {
        post,
        isLoading,
        isError,
    } = usePostDetail(Number(params['id']));

    return (
        <div className={'flex flex-col space-y-4'}>
            <span className={'text-gray mt-4'}>
                {isLoading
                    ? 'Загрузка...'
                    : post?.body}
                {isError && 'Ошибка'}
            </span>
        </div>
    );
};
