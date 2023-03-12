
// the actual fuzzy search framework
import Fuse from 'fuse.js@6.6.2'
// data file that holds search terms and their fields
import data from 'fuse_data.js'

// Setup the options that the 'fuse' object will use
const options = {
    getFn: (obj, path) => {
        const value = Fuse.config.getFn(obj, path)
        value.isCaseSensitive = false,
            value.includeMatches = false,
            value.minMatchCharLength = 2,
            value.threshold = 0.5,
            value.ignoreLocation = true,
            value.keys = [
                "name",
                "page_name",
                "namespace",
                "target",
                "class",
                "struct",
                "enum",
                "array"
            ]
        return value
    }
};
// create the fuse object we'll refer to for searching
const fuse = new Fuse(data, options);

function Search(pattern) {
    return fuse.search(pattern, 10);
}

// This function should display, in a dropdown box below the search box, the
// search results returned from the search query itself
function DisplaySearchResults(pattern) {
    // Not going to lie, not sure if this does what I think it does... need to test it
    const results = Search(pattern);
    const resultsName = results.map(data, data.item);
    document.getElementById('search_results').innerHTML.replace(resultsName.map(
        data => {
            const { namespace, name } = data;
        }
    ));

}

// This function should redirect the user to the page indicated in the 'page_name'
// field of the search result returned from the search query
function GoToMatchedSearchPage(foundItem) {
    // redirect somehow to foundItem's page link
    const pageName = foundItem.map(data => { const { page_name } = data });
}
