import {PostDetailLayout} from "../../shared/ui-kit/layouts/PostDetailLayout";
import {PostDetailHeader} from "../../entities/postDetail/ui/PostDetailHeader";
import {PostDetailBody} from "../../entities/postDetail/ui/PostDetailBody";

export const PostDetail = () => {
    return (
        <PostDetailLayout
            header={<PostDetailHeader/>}
            body={<PostDetailBody/>}
        />
    );
};
