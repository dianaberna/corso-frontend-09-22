// CAUTION: functions and classes must be in top-level in original file
import { append2body, append2parent, nestingFromJson, HtmlElem } from "./130-dom.js";
// import * as asd from "./130-dom.js" ;

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



window.addEventListener("load", function () {
    document.body.innerHTML = "";

    /* create header with nav and buttons */
    let header = append2body("header", "0_ui-nav");
    let headerNav = append2parent("nav", header);
    let headerNavContent = [
        new HtmlElem({
            "elem": "button",
            "attributes": [[]],
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
            "attributes": [[]],
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


    /* create main */
    let main = append2body("main");
    let mainHeader = append2parent("header", main);
    /* nesting artist img + create div to nest a button svg */
    let artistPicCont = [
        new HtmlElem({
            "elem": "img",
            "attributes": [["id", "artist"], ["src", "./assets/female-singer.png"]],
            "content": ``
        }),
    ];
    nestingFromJson(mainHeader, artistPicCont);
    let mainHeaderPlayButton = append2parent("div", mainHeader, "1_play-button");
    let mainHeaderPlayButtonCont = [
        new HtmlElem({
            "elem": "button",
            "attributes": [[]],
            "content": `
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.2 37.1003L36.0966 28.9337C36.7266 28.467 36.7266 27.5337 36.0966 27.067L25.2 18.9003C24.43 18.317 23.3333 18.877 23.3333 19.8337V36.167C23.3333 37.1237 24.43 37.6837 25.2 37.1003ZM28 4.66699C15.12 4.66699 4.66663 15.1203 4.66663 28.0003C4.66663 40.8803 15.12 51.3337 28 51.3337C40.88 51.3337 51.3333 40.8803 51.3333 28.0003C51.3333 15.1203 40.88 4.66699 28 4.66699ZM28 46.667C17.71 46.667 9.33329 38.2903 9.33329 28.0003C9.33329 17.7103 17.71 9.33366 28 9.33366C38.29 9.33366 46.6666 17.7103 46.6666 28.0003C46.6666 38.2903 38.29 46.667 28 46.667Z" fill="#00FFE0"/>
                </svg>
            `
        }),
    ];
    nestingFromJson(mainHeaderPlayButton, mainHeaderPlayButtonCont);


    /* create a div#dashboard with 3 div.info, each div.info with 1 div.info-key & 1 div.info-value */
    let mainHeaderDashboard = append2parent("div", mainHeader, "0_dashboard");
    let mainHeaderDashConts = [
        [
            new HtmlElem({
                "elem": "p",
                "attributes": [["class", "info-key"]],
                "content": `Songs`
            }),
            new HtmlElem({
                "elem": "p",
                "attributes": [["class", "info-value"]],
                "content": `56`
            }),
        ],
        [
            new HtmlElem({
                "elem": "p",
                "attributes": [["class", "info-key"]],
                "content": `Followers`
            }),
            new HtmlElem({
                "elem": "p",
                "attributes": [["class", "info-value"]],
                "content": `7556`
            }),
        ],
        [
            new HtmlElem({
                "elem": "p",
                "attributes": [["class", "info-key"]],
                "content": `Following`
            }),
            new HtmlElem({
                "elem": "p",
                "attributes": [["class", "info-value"]],
                "content": `390`
            }),
        ],
    ];
    for (let i = 0; i < mainHeaderDashConts.length; i++) {
        // create a div.info each time to nest the Conts for each
        let _divInfo = append2parent("div", mainHeaderDashboard, "1_info");
        nestingFromJson(_divInfo, mainHeaderDashConts[i]);
    };


    /* create div#songs */
    const mainSongs = append2parent("div", main, "0_songs");

    /* created section#song-album inside div#song */
    const mainSongAlbum = append2parent("section", mainSongs, "0_song-album");
    const popular = append2parent("h1", mainSongAlbum);
    popular.innerHTML = "Popular";
    // created the div which will hold 3 div.album-card
    const mainSongAlbumDiv = append2parent("div", mainSongAlbum);
    // more than one content, i cannot nest all of them on the same level of indentation
    let mainSongAlbumDivCardConts = [
        [
            [
                new HtmlElem({
                    "elem": "div",
                    "attributes": [["class", "album-frame"]],
                    "content": `<img src="" alt="Album Image">`,
                }),
                new HtmlElem({
                    "elem": "p",
                    "attributes": [["class", "slim-text"]],
                    "content": `<img src="" alt="Album Image">`,
                }),
            ],
        ],
        [
        // NOTE :
        // THIS multi level nesting can be confusing, better avoid to put diff level of indentation in diff cont Json
            new HtmlElem({
                "elem": "button",
                "attributes": [[]],
                "content": `
                <svg class="smaller-play" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.2 37.1003L36.0966 28.9337C36.7266 28.467 36.7266 27.5337 36.0966 27.067L25.2 18.9003C24.43 18.317 23.3333 18.877 23.3333 19.8337V36.167C23.3333 37.1237 24.43 37.6837 25.2 37.1003ZM28 4.66699C15.12 4.66699 4.66663 15.1203 4.66663 28.0003C4.66663 40.8803 15.12 51.3337 28 51.3337C40.88 51.3337 51.3333 40.8803 51.3333 28.0003C51.3333 15.1203 40.88 4.66699 28 4.66699ZM28 46.667C17.71 46.667 9.33329 38.2903 9.33329 28.0003C9.33329 17.7103 17.71 9.33366 28 9.33366C38.29 9.33366 46.6666 17.7103 46.6666 28.0003C46.6666 38.2903 38.29 46.667 28 46.667Z" fill="#00FFE0"/>
                </svg>
            `,
            }),

        ],
    ];
    for (let i = 0; i < 3; i++) {
        let _divAlbumDivCard = append2parent("div", mainSongAlbumDiv, "1_album-card");
        // first two content in conts
        for (let _cont of mainSongAlbumDivCardConts[0]) {
            nestingFromJson(_divAlbumDivCard, _cont);
        };
        // creata the div.play-button of div.album-card
        let _divAlbumDivCardPlayButton = append2parent("div", _divAlbumDivCard, "1_play-button");
        nestingFromJson(_divAlbumDivCardPlayButton, mainSongAlbumDivCardConts[1]);
    };


    /* create section#song-singles inside div#song */
    const mainSongSingles = append2parent("section", mainSongs, "0_song-singles");
    const singles = append2parent("h1", mainSongSingles);
    singles.innerHTML = "Singles";

    /* create div.song-card inside section#song-singles */
    const mainSongDivCard = append2parent("div", mainSongSingles, "1_song-card");
    /* song card img with attr alt & src */
    let mainSongDivCardImg = append2parent("img", mainSongDivCard, "1_song-card-img");
    mainSongDivCardImg.src = "";
    mainSongDivCardImg.alt = "Singles Image";
    /* create song-caption with nested content */
    const songCaptionCont = [

            new HtmlElem({
                "elem": "p",
                "attributes": [[]],
                "content": `Song title here`
            }),
            new HtmlElem({
                "elem": "span",
                "attributes": [["class", "slim-text"]],
                "content": `2020`
            }),

    ];
    let mainSongDivCardCaption = append2parent("div", mainSongDivCard, "1_song-caption");
    nestingFromJson(mainSongDivCardCaption, songCaptionCont );

    /* create song menu button with nested content */
    const songMenuButtonCont = [
        new HtmlElem({
            "elem": "button",
            "attributes": [[]],
            "content": `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_10350)">
                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#161616"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2_10350">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            `
        }),
    ];
    nestingFromJson(mainSongDivCard , songMenuButtonCont);
});