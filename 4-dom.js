// FIXME : import doesn't work with my js / node.js version
import { crElem, append2body, append2parent, nestingFromJson, HtmlElem} from "./130-dom.js" ;
/*
 * imported functions and their args
 * crElem(tag, idOrClass="")
 * append2body(child, idOrClass="")
 * append2parent(child, parent, idOrClass="")
 * nestingFromJson(parent, childrenContent)
 *
 * imported class(es) and own args
 * HtmlElem(elem, attributes, content)
 */


window.addEventListener("load", function (){
    let header = append2body("header", "0_ui-nav");
    let headerNav = append2parent("nav", header);
    let headerNavContent = [
        new HtmlElem({
            "elem": "button",
            "attributes": [],
            "content": `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_10347)">
                    <path d="M16.6201 2.98957C16.1301 2.49957 15.3401 2.49957 14.8501 2.98957L6.54006 11.2996C6.15006 11.6896 6.15006 12.3196 6.54006 12.7096L14.8501 21.0196C15.3401 21.5096 16.1301 21.5096 16.6201 21.0196C17.1101 20.5296 17.1101 19.7396 16.6201 19.2496L9.38006 11.9996L16.6301 4.74957C17.1101 4.26957 17.1101 3.46957 16.6201 2.98957Z" fill="#161616"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2_10347">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            `,
        }),
        new HtmlElem({
            "elem": "button",
            "attributes": [],
            "content": `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_10350)">
                    <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#161616"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2_10350">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            `,
        }),
    ];
    nestingFromJson(headerNav, headerNavContent);
});