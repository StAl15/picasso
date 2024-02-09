import {useGetPostsByIdQuery} from "../../../feautures/posts/queries/use-posts-query";

export function usePostDetail(id: number) {

    const {
        data: post,
        isSuccess,
        isError,
        isLoading,
        refetch
    } = useGetPostsByIdQuery({id: id});


    return {
        post,
        isSuccess,
        isLoading,
        isError,
        refetch
    };
}
