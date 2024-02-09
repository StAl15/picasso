import {PostLayout} from "../../shared/ui-kit/layouts/PostLayout";
import {PostBody} from "../../entities/posts/ui/PostBody";

export const Posts = () => {
    return (
        <PostLayout
            body={<PostBody/>}
        />
    );
};
