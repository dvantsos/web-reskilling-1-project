import Title from "../GeneralComponents/Title";
import SingleRelatedPost from "./SingleRelatedPost";

const RelatedPosts = (props) => {

    return (
        <>
            <div className="space-y-0 py-4">
                <Title text="Related articles or posts"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {props.posts.map((post) =>
                        <SingleRelatedPost key={post.id} postId={post.id} postTitle={post.title} author={post.userId} photo={post.photo_1} photoTitle={post.photoTitle_1} />)}
                </div>
            </div>
        </>
    );
}
  
export default RelatedPosts;