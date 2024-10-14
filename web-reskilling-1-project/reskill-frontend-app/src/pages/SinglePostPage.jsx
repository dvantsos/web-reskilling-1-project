import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Title from "../components/GeneralComponents/Title";
import Paragraph from "../components/GeneralComponents/Paragraph";
import SubTitle from "../components/GeneralComponents/SubTitle";
import Image from "../components/GeneralComponents/Image";
import LoadingPage from "./LoadingPage";
import Error from "../components/GeneralComponents/Error";

const SinglePostPage = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/post/' + id)
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
        <div className="container py-32 grid grid-cols-1 lg:grid-cols-3 gap-28">
            <div className="space-y-4 col-span-2">
                <Title text="Single Post"/>
                <SubTitle text={data.title}/>
                <Paragraph text={data.body}/>
            </div>
            <Image photo={data.photo} title={data.photoTitle}/>
        </div>        
    </>
)};
  
export default SinglePostPage;