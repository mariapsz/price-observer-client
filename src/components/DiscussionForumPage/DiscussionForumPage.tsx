import React from "react";
import {DiscussionForumPageState} from "./DiscussionForumPageState";
import {DiscussionForumPageProps} from "./DiscussionForumPageProps";
import {DiscussionPost} from "../../dataModels/Post";
import {AppState} from "../../redux/store/storeDataModels/AppState";
import {Post} from './Post/Post';
import {connect} from "react-redux";
import jwt_decode from "jwt-decode";
import {UserDetails} from "../../dataModels/UserDetails";
import NewPost from "./NewPost/NewPost";
import {Frame, PostContainer} from "../../styles/DiscussionPanel/Frame";
import {SectionTitle} from "../../styles/DiscussionPanel/SectionTitle";
import DashboardPageWrapper from "../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper";
import {getDiscussionPosts} from "../../services/discussionPanelService";
import {FrameHeader} from "../../styles/DiscussionPanel/FrameHeader";


class DiscussionForumPage extends React.Component<DiscussionForumPageProps, DiscussionForumPageState> {
    constructor(props: DiscussionForumPageProps) {
        super(props);
        this.state = {
            posts: undefined,
        }
    }

    componentDidMount(): void {
        this.getPosts();
    }

    getPosts = () => {
        //sort by date
        getDiscussionPosts({token: this.props.token})
            .then((response: any) => {
                if (response.body.posts.length > 0) {
                    let posts: DiscussionPost[] = response.body.posts.map((post: DiscussionPost) => {
                        post.userName = post.userName === this.props.userName ? 'Ty' : post.userName;
                        return post;
                    });
                    posts.sort((a: DiscussionPost, b: DiscussionPost) => b.date - a.date);
                    this.setState({posts});
                }
            })
            .catch((error) => {
                alert(error)
            });
    };

    render() {
        return (
            <DashboardPageWrapper>
                <Frame>
                    <FrameHeader>
                        <SectionTitle>PANEL DYSKUSYJNY</SectionTitle>
                    </FrameHeader>
                    <NewPost
                        postAddedHandler={this.getPosts}
                    />
                    {this.state.posts && this.state.posts.map((post: DiscussionPost, index: number) =>
                        <PostContainer
                            key={index}>
                            <Post post={post}/>
                        </PostContainer>)}
                </Frame>
            </DashboardPageWrapper>
        );
    }
}

const mapStateToProps = (store: AppState) => {
    return {
        userName: jwt_decode<UserDetails>(store.login.token!).name,
        token: store.login.token!,
    };
};


export default connect(mapStateToProps, null)(DiscussionForumPage);