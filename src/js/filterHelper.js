const filterPosts = (lists, query) => {
    if (!query) {
        return lists;
    }

    return lists.filter((list) => {
        const postName = list.title.toLowerCase();
        return postName.includes(query);
    });
};

export default filterPosts;