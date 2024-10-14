import FooterIcons from "../FooterComponents/FooterIcons";
import FooterTopics from "../FooterComponents/FooterTopics";
import SiteLink from "./SiteLink";

const Footer = () => {

    const topics = [
        {
            id: "topic_1",
            topicName: "Topic",
            pages: [
                {
                    id: "footer_page_1",
                    pageName: "Page",
                    href: "#"
                },
                {
                    id: "footer_page_2",
                    pageName: "Page",
                    href: "#"
                },
                {
                    id: "footer_page_3",
                    pageName: "Page",
                    href: "#"
                },
            ]
        },
        {
            id: "topic_2",
            topicName: "Topic",
            pages: [
                {
                    id: "footer_page_4",
                    pageName: "Page",
                    href: "#"
                },
                {
                    id: "footer_page_5",
                    pageName: "Page",
                    href: "#"
                },
                {
                    id: "footer_page_6",
                    pageName: "Page",
                    href: "#"
                },
            ]
        },
        {
            id: "topic_3",
            topicName: "Topic",
            pages: [
                {
                    id: "footer_page_7",
                    pageName: "Page",
                    href: "#"
                },
                {
                    id: "footer_page_8",
                    pageName: "Page",
                    href: "#"
                },
                {
                    id: "footer_page_9",
                    pageName: "Page",
                    href: "#"
                },
            ]
        },
    ]

    return (
        <>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-gray-300 pt-12">
                <SiteLink/>
                <FooterTopics topics={topics}/>
                <FooterIcons/>
            </div>
        </>
    );
}
  
export default Footer;
