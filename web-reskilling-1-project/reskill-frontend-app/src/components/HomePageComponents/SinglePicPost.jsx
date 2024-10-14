import Image from "../GeneralComponents/Image";
import HomePageParagraph from "./HomePageParagraph";


const SinglePicPost = (props) => {
    return (
        <>
            <a href={"/" + props.post.id}>
                <Image photo={props.post.photo_1} title={props.post.photoTitle_1}/>
                <HomePageParagraph text={props.post.body}/>
            </a>         
        </>
    );
}
  
export default SinglePicPost;