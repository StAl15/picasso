import {ReactNode} from "react";

type PostLayoutProps = {
    body?: ReactNode
}
export const PostLayout = ({body}: PostLayoutProps) => {
    return (
        <div className={'w-full h-auto min-h-full overflow-y-scroll'}>
            {body}
        </div>
    );
};
