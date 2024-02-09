import {usePostsBody} from "../model/use-posts-body";
import {PostsList} from "../../../widgets/posts/PostsList";
import {LegacyRef} from "react";

export const PostBody = () => {
    const {
        posts,
        isSuccess,
        isLoading,
        isError,
        containerRef
    } = usePostsBody();

    return (
        <div className={'p-12'}>
            {isLoading && <p>Loading...</p>}
            {isSuccess && <PostsList posts={posts}/>}
            {isError && <p>Error!</p>}
            <div ref={containerRef as LegacyRef<HTMLDivElement> | undefined}></div>
        </div>
    );
};
