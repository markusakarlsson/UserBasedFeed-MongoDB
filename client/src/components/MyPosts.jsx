import React from "react";
import axios from "axios";
import Modal from "./Modal";
import MyPostsContext, { MyPostsConsumer } from "./contextMyPosts";

class MyPosts extends React.Component {
  static contextType = MyPostsContext;

  state = {
    posts: [],
    showModal: false,
    postIdToUpdate: "",
    postTitleToUpdate: "",
    postTextToUpdate: "",
  };

  componentWillUpdate = () => {
   this.context.getMyPosts(); 
  }; 

  /* toggleModal = () => {
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
  };

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

  displayMyPosts = (posts) => {
    if (!posts.length) return null;
    console.log("POST IN DISPLAYMYPOSTS: ", posts);

    return posts.map((post, index) => (
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
      <MyPostsConsumer>
        {({}) => (
          <>
            <div
              className="myPostsContainer"
              style={{
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "40vh",
              }}
            >
              <h3>My Posts</h3>
              {/*  {this.displayMyPosts(this.state.posts)} */}
               {this.context.displayMyPosts()}
            </div>
            {this.modal}
          </>
        )}
      </MyPostsConsumer>
    );
  }
}

export default MyPosts;
