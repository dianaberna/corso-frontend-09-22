
import data from './data.json'  assert {type: 'json'};

window.addEventListener("load", ()=> {
        buildHeader();
        buildFilters();
        buildResults();
    });

// ******** Header

 function buildHeader(){
    
    let header = document.createElement("header");
    document.body.appendChild(header);
    let headerContainer = document.createElement("div");
    headerContainer.setAttribute("class", "header-container");
    let headerIcon = document.createElement("i");
    headerIcon.setAttribute("class", "material-symbols-rounded");
    headerIcon.innerHTML = "&#xe2ea";
    let h4Header = document.createElement("h4");
    h4Header.innerHTML = "Nashville hotels & places to stay";
    headerContainer.append(headerIcon, h4Header);
    header.appendChild(headerContainer);
 }

// ******** Filters

 function buildFilters(){
    
    let mainNode = document.createElement("main");
    document.body.appendChild(mainNode); // Main node added
    
    // Filters Building
    let divFiltersContainer = document.createElement("div");
    divFiltersContainer.setAttribute("class", "filters-container");
    mainNode.appendChild(divFiltersContainer);
    let arrayElements = ["Map|0", "Sept 12 - 13|0", "2|group", "Filters 1|filter_list"];
    let filtersToAppend = buildFiltersButtons(arrayElements);
    filtersToAppend.forEach(element => {
        divFiltersContainer.appendChild(element);
    });

    // Filters Info
    let filtersInfoDiv = document.createElement("div");
    filtersInfoDiv.setAttribute("class", "filters-info");
    let filtersInfoSpan = document.createElement("span");
    filtersInfoSpan.innerHTML = "12 of 300 places are available and your filters, sorted by best values";
    let filtersInfoI = document.createElement("i");
    filtersInfoI.setAttribute("class", "material-symbols-outlined nofill");
    filtersInfoI.innerHTML = "info";
    filtersInfoDiv.appendChild(filtersInfoSpan);
    filtersInfoDiv.appendChild(filtersInfoI);
    mainNode.appendChild(filtersInfoDiv);
 }
 function buildFiltersButtons(filtersLabels){
    
    let collection = [];
    
    filtersLabels.forEach(element => {
        
        //Create elements
        let inputNode = document.createElement("input");
        let labelNode = document.createElement("label");
        let spanNode = document.createElement("span");
        let iElement = document.createElement("i");

        //Setting up attributes
        inputNode.setAttribute("class", "filter-button");
        labelNode.setAttribute("class", "button-style");
        iElement.setAttribute("class", "material-symbols-rounded")
        inputNode.setAttribute("type", "radio");
        inputNode.setAttribute("name", "filters");
        inputNode.setAttribute("id", "filter"+filtersLabels.indexOf(element));
        labelNode.setAttribute("for", "filter"+filtersLabels.indexOf(element));

        spanNode.innerHTML = element.split("|")[0];
 
        //Check icons and append
        if (element.split("|")[1] != 0)
        {
            iElement.innerHTML = element.split("|")[1];
            labelNode.appendChild(iElement);
        }
        labelNode.appendChild(spanNode);

        // Push elements to Array
        collection.push(inputNode);
        collection.push(labelNode);

    });

    return collection;
 }

 // ******** Results

 function buildResults()
 {
    let mainNode = document.getElementsByTagName("main")[0];
    let resultsContainer = document.createElement("div");
    resultsContainer.setAttribute("class", "results-container");
    mainNode.appendChild(resultsContainer);
    resultsContainer.appendChild(createHotelCard("Hotel Green", "./Assets/1246280_16061017110043391702.jpg", "&#xe838&#xe838&#xe838&#xe838&#xe838", "200", "450$"));

    data.forEach(element => {
        var starConverter = "";
        for (let i=0; i<element.HotelStars; i++)
        {
            starConverter = starConverter+"&#xe838";
        }
        resultsContainer.appendChild(createHotelCard(element.HotelName, element.HotelImage, starConverter, element.HotelReviewCount, element.HotelPrice));
    });
 }

 function createHotelCard(hotelName, hotelImage, hotelRating, hotelReviewCount, hotelPrice)
 {
    let divHotelCard = document.createElement("div");
    divHotelCard.setAttribute("class", "hotel-card");
    let favButton = document.createElement("button");
    favButton.setAttribute("class", "button");
    divHotelCard.appendChild(favButton);
    let favIcon = document.createElement("i");
    favIcon.setAttribute("class", "material-symbols-outlined");
    favIcon.innerHTML = "favorite";
    favButton.appendChild(favIcon);
    let imgHotel = document.createElement("img");
    imgHotel.setAttribute("alt", "Hotel Image");
    divHotelCard.appendChild(imgHotel);
    let divHotelInfo = document.createElement("div");
    divHotelInfo.setAttribute("class", "hotel-info");
    divHotelCard.appendChild(divHotelInfo);
    let hotelNameH2 = document.createElement("h2");
    divHotelInfo.appendChild(hotelNameH2);
    let divRatingContainer = document.createElement("div");
    divRatingContainer.setAttribute("class", "rating-container");
    divHotelInfo.appendChild(divRatingContainer);
    let hotelStars = document.createElement("i");
    hotelStars.setAttribute("class", "material-symbols-rounded");
    divRatingContainer.appendChild(hotelStars);
    let reviewsCount = document.createElement("span");
    divRatingContainer.appendChild(reviewsCount);
    let divHotelPriceInfo = document.createElement("div");
    divHotelPriceInfo.setAttribute("class", "hotel-price-info");
    divHotelInfo.appendChild(divHotelPriceInfo);
    let firstDivAfterHotelPriceInfo = document.createElement("div");
    divHotelPriceInfo.appendChild(firstDivAfterHotelPriceInfo);
    let hotelPriceH3 = document.createElement("h3");
    firstDivAfterHotelPriceInfo.appendChild(hotelPriceH3);
    let firstDivAfterFirstDiv = document.createElement("div");
    firstDivAfterHotelPriceInfo.appendChild(firstDivAfterFirstDiv);
    let bookingSpan = document.createElement("span");
    bookingSpan.innerHTML = "Booking.com";
    firstDivAfterFirstDiv.appendChild(bookingSpan);
    let arrowIcon = document.createElement("i");
    arrowIcon.setAttribute("class", "material-symbols-rounded");
    arrowIcon.innerHTML = "&#xf8ce";
    firstDivAfterFirstDiv.appendChild(arrowIcon);
    let viewDealButton = document.createElement("button");
    viewDealButton.setAttribute("type", "button");
    viewDealButton.setAttribute("class", "button-style");
    viewDealButton.innerHTML = "View deal";
    divHotelPriceInfo.appendChild(viewDealButton);

    imgHotel.setAttribute("src", hotelImage);
    hotelNameH2.innerHTML = hotelName;
    hotelStars.innerHTML = hotelRating;
    reviewsCount.innerHTML = hotelReviewCount;
    hotelPriceH3.innerHTML = hotelPrice;

    return divHotelCard;
 }


