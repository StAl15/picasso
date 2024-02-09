import {ReactNode} from "react";

type PostDetailLayoutProps = {
    header?: ReactNode;
    body?: ReactNode;
};

export const PostDetailLayout = (
    {header, body}: PostDetailLayoutProps
) => {
    return (
        <div className={'p-12 flex flex-col'}>
            {header}
            {body}
        </div>
    );
};
