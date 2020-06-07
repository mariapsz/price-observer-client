import {DiscussionPost} from "../../../dataModels/Post";
import * as React from "react";
import {PostContainerHeader} from "../../../styles/DiscussionPanel/PostContainerHeader";
import {PostContainerContent} from "../../../styles/DiscussionPanel/PostContainerContent";
import {Link} from "../../../styles/DiscussionPanel/Link";
import {LinkWrapper} from "../../../styles/DiscussionPanel/LinkWrapper";
import { withTranslation } from 'react-i18next';

const Post = (props: any) => {
    return <div>
        <PostContainerHeader>
            <div><b>{props.post.userName}</b></div>
            <div><b>{new Date(props.post.date).toLocaleString()}</b></div>
        </PostContainerHeader>
        <PostContainerContent>
            <div>{props.post.message}</div>
            <LinkWrapper>
                <Link
                    href={props.post.link}>
                    LINK
                </Link>
            </LinkWrapper>
        </PostContainerContent>
    </div>
};


export default withTranslation()(Post)