const filterPosts = (lists, query) => {
    if (!query) {
        console.log('In empty query');
        return lists;
    }

    return lists.filter((list) => {
        console.log('inside filter');
        const postName = list.title.toLowerCase();
        return postName.includes(query);
    });
};

export default filterPosts;