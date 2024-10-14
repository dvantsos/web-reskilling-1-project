import Image from "../GeneralComponents/Image";
import Paragraph from "../GeneralComponents/Paragraph";
import SubTitle from "../GeneralComponents/SubTitle";

const SingleRelatedPost = (props) => {
    return (
        <>
            <a className="py-8" href={"/" + props.postId}>
                <div className="space-y-4">
                    <Image photo={props.photo} title={props.photoTitle} />
                    <div className="space-y-1">
                        <Paragraph text={props.postTitle}/>
                        <SubTitle text= {"Author: " + props.author}/>
                    </div>

                </div>
                
            </a>
        </>
    );
}
  
export default SingleRelatedPost;

