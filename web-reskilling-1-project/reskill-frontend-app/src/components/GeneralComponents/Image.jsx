const Image = (props) => {
    return (
        <>
            <img className="w-full object-cover rounded-lg" title={props.title} src={props.photo}/>     
        </>
    );
}
  
export default Image;