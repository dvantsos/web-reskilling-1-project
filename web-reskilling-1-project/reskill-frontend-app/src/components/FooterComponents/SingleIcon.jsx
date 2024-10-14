const SingleIcon = (props) => {
    return (
        <>
          <a href={props.href} target="_blank" className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-icon-gray">
              <path d={props.path}/>
            </svg>
          </a>
        </>
    );
}
  
export default SingleIcon;