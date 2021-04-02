import axios from "axios";

export default {
    // Get all blogs
    getBlogs: function() {
        return axios.get("/api/blogs");
    },
    // Get the blogs with the given id
    getBlog: function(id) {
        return axios.get("/api/blogs/" + id);
    },
    // Delete the books with the given id
    deleteBlog: function(id) {
        return axios.delete("/api/blogs/" + id);
    },
    // Save a blog to the database
    saveBlog: function(blogData) {
        return axios.post("/api/blogs", blogData);
    }
};