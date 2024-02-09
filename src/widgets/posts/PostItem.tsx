import {ComponentPropsWithoutRef} from "react";
import {IPost} from "../../feautures/posts/types";
import {twMerge} from "tw-merge";
import clsx from "clsx";
import {useNavigate} from "react-router";

export const PostItem = (
    {post, ...other}: { post: IPost } & ComponentPropsWithoutRef<'div'>
) => {
    const refactorBody = (body: string) => {
        return body.length > 40 ? body?.substring(0, 40) + '... ' : body;
    };
    const navigate = useNavigate();

    return (
        <div
            {...other}
            className={twMerge(clsx(
                'w-full flex flex-row items-center space-x-4 space-y-4',
                other.className)
            )}>
            <span className={'m-0'}>{post.id}</span>
            <span className={'m-0'}>{post.title}</span>
            <p>{refactorBody(post.body)}</p>
            <button
                onClick={() => navigate(`/posts/${post.id}`)}
                className={'bg-slate-700 text-white p-4'}>
                Просмотр
            </button>
        </div>
    );
};
