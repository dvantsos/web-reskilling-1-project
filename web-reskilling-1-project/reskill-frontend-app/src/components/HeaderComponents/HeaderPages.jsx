import LayoutLink from "../LayoutComponents/LayoutLink";

const HeaderPages = (props) => {
    return (
        <>
            <nav className="space-x-8">
                {props.pages.map(page => {
                    return <LayoutLink key={page.id} href={page.href} text={page.pageName}/>
                })}
                <a href="#" className="bg-black font-sans font-medium text-[16px] text-white py-4 px-6 rounded-lg hover:bg-gray-800">Button</a>
            </nav>

        </>
    );
}
  
export default HeaderPages;