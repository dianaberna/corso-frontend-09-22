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
    let divHotelCard = document.createElement("div");
    divHotelCard.setAttribute("class", "hotel-card");
    resultsContainer.appendChild(divHotelCard);
    let favButton = document.createElement("button");
    favButton.setAttribute("class", "button");
    let favIcon = document.createElement("i");
    favIcon.innerHTML = "favorite";
 }
