var postData = [
    {
        userName: "Denis",
        publication: "holas"
    },
    {
        userName: "Bianca",
        publication: "En el cine :p"
    }
];

Template.postsList.helpers({
    posts: postData
});