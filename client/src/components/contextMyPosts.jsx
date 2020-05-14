import React from "react";
import axios from "axios";

const MyPostsContext = React.createContext();

export class MyPostsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      toggleModal: this.toggleModal,
      getMyPosts: this.getMyPosts,
      updatePost: this.updatePost,
      handelInputChange: this.handelInputChange,
      deletePost: this.deletePost,
      submitUpdate: this.submitUpdate,
      displayMyPosts: this.displayMyPosts,
    };
  }

  // Function from MyPosts

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  getMyPosts = () => {
    axios({
      url: "http://localhost:3001/posts/getownposts",
      method: "GET",
      withCredentials: "true",
    })
      .then((response) => {
        this.setState({ posts: response.data });
        console.log("In function this.state:", this.state);
      })
      .catch(() => {
        alert("error retrieving data");
      });
    console.log("hej från MyPost-context");
  };

  // UPDATE

  updatePost = (event) => {
    let postInfo = event.target.parentElement.dataset;
    this.setState({
      postTitleToUpdate: postInfo.title,
      postIdToUpdate: postInfo.id,
      postTextToUpdate: postInfo.text,
    });
  };

  handelInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  //DELETE

  deletePost = (event) => {
    let postToDelete = event.target.parentElement.dataset.id;

    axios({
      url: "http://localhost:3001/posts/" + postToDelete,
      method: "DELETE",
      withCredentials: "true",
    })
      .then(() => {
        this.displayMyPosts(this.state.posts);
      })
      .catch(() => {
        alert("error deleting data");
      });
  };

  // SUBMIT

  submitUpdate = (event) => {
    event.preventDefault();

    const inputValues = {
      title: this.state.postTitleToUpdate,
      textContent: this.state.postTextToUpdate,
    };

    axios({
      url: "http://localhost:3001/posts/" + this.state.postIdToUpdate,
      method: "PUT",
      data: inputValues,
    })
      .then(() => {
        console.log("data sent to server");
        this.setState({});
      })
      .then(() => {
        this.toggleModal();
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  //DISPLAY

  displayMyPosts = (posts) => {
    if (!this.state.posts.length) return null;
    console.log("POST IN DISPLAYMYPOSTS: ", posts);

    return this.state.posts.map((post, index) => (
      <div
        data-id={post._id}
        data-title={post.title}
        data-text={post.textContent}
        key={index}
        style={{ border: "1px solid black", padding: "0.5rem" }}
      >
        <h3>{post.username}</h3>
        <h4>{post.title}</h4>
        <p>{post.textContent}</p>
        <i
          className="fas fa-trash-alt"
          onClick={(event) => {
            this.deletePost(event);
          }}
        ></i>
        <i
          className="fas fa-edit"
          onClick={(event) => {
            this.updatePost(event);
            this.toggleModal();
          }}
        ></i>
      </div>
    ));
  };

  render() {
    return (
      <MyPostsContext.Provider value={this.state}>
        {this.props.children}
      </MyPostsContext.Provider>
    );
  }
}

export default MyPostsContext;

export const MyPostsConsumer = MyPostsContext.Consumer;
