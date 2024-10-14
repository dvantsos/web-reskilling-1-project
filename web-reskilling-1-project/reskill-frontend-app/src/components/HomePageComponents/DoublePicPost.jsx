import Image from "../GeneralComponents/Image";
import HomePageParagraph from "./HomePageParagraph";

const DoublePicPost = (props) => {
    
    return (
        <>
            <a href={"/" + props.post.id}>
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Image photo={props.post.photo_1} title={props.post.photoTitle_1}/>
                    <Image photo={props.post.photo_2} title={props.post.photoTitle_2}/>
                </div>
                <HomePageParagraph text={props.post.body}/>
            </a>
        </>
    );
}
  
export default DoublePicPost;