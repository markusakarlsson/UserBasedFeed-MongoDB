import React from "react";
import axios from "axios";
import Modal from "./Modal";

const Context = React.createContext();

export class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      myPosts: [],
      showModal: false,
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
      isLoggedIn: false,
      authenticated: this.authenticated,
    };
  }

  authenticated = () => {
    axios({
      url: "http://localhost:3001/users/authenticate",
      method: "GET",
      withCredentials: "true",
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ isLoggedIn: true });
        }
      })
      .catch(() => {
        alert("error retrieving data");
      });
    }

  // Functions from PostFeed

  getAllPosts = () => {
    axios
      .get("http://localhost:3001/posts/")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };

  displayPosts = () => {
    if (!this.state.posts.length) return null;

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
        this.getAllPosts();
        this.getMyPosts();
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
        this.setState({});
        this.getMyPosts();
        this.getAllPosts();
      })
      .then(() => {
        this.toggleModal();
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  //DISPLAY

  displayMyPosts = () => {
    if (!this.state.myPosts.length) return null;

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
          paddingBottom: "1rem"
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

  get modal() {
    if (this.state.showModal) {
      return (
        <Modal>
          <div
            style={{
              zIndex: 1,
              position: "absolute",
              top: "25%",
              left: "25%",
              background: "black",
              color: "white",
              height: "20rem",
              width: "30rem",
              borderRadius: "1rem",
              backgroundColor: "#61082b",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <button
              style={{ position: "absolute", left: "85%", top: "1rem" }}
              className="myButton"
              onClick={this.toggleModal}
            >
              Close
            </button>
            <h1>Update Post</h1>
            <form
              onSubmit={this.submitUpdate}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label style={{ margin: "1rem" }}>Title</label>
              <input
                style={{
                  padding: "0.5rem",
                  borderRadius: "1rem",
                  border: "none",
                  width: "30%",
                }}
                type="text"
                name="postTitleToUpdate"
                value={this.state.postTitleToUpdate}
                onChange={this.handelInputChange}
              />
              <label style={{ margin: "1rem" }}>Text</label>
              <input
                style={{
                  padding: "0.5rem",
                  borderRadius: "1rem",
                  border: "none",
                  width: "90%",
                }}
                type="text"
                name="postTextToUpdate"
                value={this.state.postTextToUpdate}
                onChange={this.handelInputChange}
              />
              <div>
                <button
                  style={{ margin: "2rem" }}
                  className="myButton"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </Modal>
      );
    }
    return undefined;
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
        {this.modal}
      </Context.Provider>
    );
  }
}

export default Context;

export const Consumer = Context.Consumer;
