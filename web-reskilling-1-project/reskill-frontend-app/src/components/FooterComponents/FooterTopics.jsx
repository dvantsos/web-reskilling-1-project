import SingleTopic from "./SingleTopic";

const FooterTopics = (props) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-span-2">
              {props.topics.map((topic) =>
                <SingleTopic key={topic.id} topicName={topic.topicName} pages={topic.pages}/>)}
            </div>
        </>
    );
}
  
export default FooterTopics;