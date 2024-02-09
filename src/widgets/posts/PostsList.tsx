import React, {ComponentPropsWithoutRef} from "react";
import {IPost} from "../../feautures/posts/types";
import {PostItem} from "./PostItem";
import {twMerge} from "tw-merge";
import clsx from "clsx";

export const PostsList = (
    {posts, ...other}:
        { posts?: IPost[] } & ComponentPropsWithoutRef<'div'>
) => {
    return (
        <div
            className={twMerge(clsx(
                'flex flex-col w-full h-auto min-h-full overflow-y-scroll',
                other.className)
            )}>
            {posts?.map((post, idx) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};
