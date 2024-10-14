import Paragraph from "../GeneralComponents/Paragraph";

const HomePageParagraph = (props) => {
    return (
        <>
            <div className="mx-56 py-16">
                <Paragraph text={props.text}/>
            </div> 
        </>
    );
}
  
export default HomePageParagraph;