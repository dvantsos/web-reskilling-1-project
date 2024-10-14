import HeaderPages from "../HeaderComponents/HeaderPages";
import SiteLink from "./SiteLink";

const Header = () => {
    const pages = [
        {
            id: "header_page_1",
            pageName: "Page",
            href: "#"
        },
        {
            id: "header_page_2",
            pageName: "Page",
            href: "#"
        },
        {
            id: "header_page_3",
            pageName: "Page",
            href: "#"
        },
    ];
    return (
        <>
            <div className="flex justify-between items-center">
                <SiteLink/>
                <HeaderPages pages={pages}/>
            </div>
        </>
    );
}
  
export default Header;