import {useGetPostsQuery} from "../../../feautures/posts/queries/use-posts-query";
import {useEffect, useState} from "react";
import {useObserver} from "../../../shared/utils/useObserver";

export function usePostsBody() {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {
        data: posts,
        isSuccess,
        isLoading,
        isFetching,
        isError,
        refetch,
    } = useGetPostsQuery({
        limit: limit,
        page: page
    });

    const [containerRef, isVisible] = useObserver({
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    });

    useEffect(() => {
        refetch();
    }, [limit, refetch]);

    useEffect(() => {
        if (isVisible && limit <= 90) {
            setLimit(prev => prev + 10);
        }
    }, [isVisible]);

    return {
        containerRef,
        isVisible,
        page,
        setPage,
        limit,
        setLimit,
        posts,
        refetch,
        isSuccess,
        isError,
        isLoading,
        isFetching
    };
}
