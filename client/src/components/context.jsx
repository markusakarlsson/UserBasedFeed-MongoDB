import React from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      myPosts: [],
      loggedInUser: undefined,
      postIdToUpdate: "",
      postTitleToUpdate: "",
      postTextToUpdate: "",
      getAllPosts: this.getAllPosts,
      displayPosts: this.displayPosts,
      toggleModal: this.toggleModal,
      getMyPosts: this.getMyPosts,
      updatePost: this.updatePost,
      handelInputChange: this.handelInputChange,
      deletePost: this.deletePost,
      submitUpdate: this.submitUpdate,
      displayMyPosts: this.displayMyPosts,
    };
  }

  // Functions from PostFeed

  getAllPosts = () => {
    axios
      .get("http://localhost:3001/posts/")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log("In function this.state:", this.state);
      })
      .catch(() => {
        alert("error retrieving data");
      });
    console.log("hej från context");
  };

  displayPosts = () => {
    if (!this.state.posts.length) return null;

    console.log("hej från display posts i contexten");
    return this.state.posts.map((post, index) => (
      <div
        key={index}
        style={{
          borderRadius: "1rem",
          backgroundColor: "white",
          margin: "0 3rem 1rem 3rem",
          padding: "0.5rem",
        }}
      >
        <h3 style={{ textAlign: "left", margin: "0.5rem" }}>
          <i className="fas fa-user-circle"></i>
          {post.username}
        </h3>
        <h4 style={{ margin: "0" }}>{post.title}</h4>
        <p>{post.textContent}</p>
      </div>
    ));
  };

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
        this.setState({ myPosts: response.data });
        console.log("In function this.state:", this.state);
      })
      .catch(() => {
        alert("error retrieving data");
      });
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
        this.displayMyPosts(this.state.myPosts);
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

  displayMyPosts = (myPosts) => {
    if (!this.state.myPosts.length) return null;
    console.log("POST IN DISPLAYMYPOSTS: ", this.state.myPosts);

    return this.state.myPosts.map((post, index) => (
      <div
        data-id={post._id}
        data-title={post.title}
        data-text={post.textContent}
        key={index}
        style={{
          backgroundColor: "#d8115a",
          borderRadius: "1rem",
          padding: "0.5rem",
          color: "white",
          width: "85%",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ textAlign: "left", margin: "0.5rem" }}>
          <i className="fas fa-user-circle"></i>
          {post.username}
        </h3>
        <h4 style={{ margin: "0" }}>{post.title}</h4>
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

  /* displayMyPosts = (myPosts) => {
    if (!this.state.myPosts.length) return null;
    console.log("POST IN DISPLAYMYPOSTS: ", this.state.myPosts);

    return this.state.myPosts.map((post, index) => (
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
  }; */

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

export const Consumer = Context.Consumer;
