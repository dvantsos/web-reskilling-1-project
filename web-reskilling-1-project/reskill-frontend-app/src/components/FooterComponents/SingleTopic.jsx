const SingleTopic = (props) => {
    return (
        <>
        <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 mb-4">{props.topicName}</h3>
            <ul className="space-y-4">
                {props.pages.map(page => {
                    return <li key={page.id}><a href={page.href} className="text-gray-600 hover:text-black">{page.pageName}</a></li>
                })}
            </ul>
            
      </div>
            
        </>
    );
}
  
export default SingleTopic;