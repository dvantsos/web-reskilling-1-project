import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../components/GeneralComponents/Title";
import SubTitle from "../components/GeneralComponents/SubTitle";
import SinglePicPost from "../components/HomePageComponents/SinglePicPost";
import DoublePicPost from "../components/HomePageComponents/DoublePicPost";
import RelatedPosts from "../components/RelatedPostsComponents/RelatedPostsList";
import LoadingPage from "./LoadingPage";
import Error from "../components/GeneralComponents/Error";

const Homepage = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts')
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    if (loading) return <LoadingPage/>;
    if (error) return <Error text={error}/>;
    return (
    <>
        <div className="space-y-4 my-28">
            <div className="space-y-2">
                <Title text="Posts List"/>
                <SubTitle text="Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading."/>
            </div>
            
            <span className="inline-block"/>

            <div>
                <SinglePicPost post={data[0]}/>
                <DoublePicPost post={data[1]}/>
            </div>

            <RelatedPosts posts={data.slice(2)}/>
        </div>
    </>
    );
}

export default Homepage