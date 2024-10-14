import Title from "./Title";

const Error = (props) => {
    return (
        <>
            <div className="flex flex-grow items-center justify-center py-40">
                <Title text={"Error handling the request: " + props.text}/>
            </div>
        </>
    );
}
  
export default Error;