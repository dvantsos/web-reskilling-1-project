const LayoutLink = (props) => {
    return (
        <>
            <a className="font-sans font-medium text-[16px] text-black" href={props.href}>{props.text}</a>
        </>
    );
}
  
export default LayoutLink;