import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [comment, setComment] = useState("");
  const [commentContent, setCommentContent] = useState([]);

  useEffect(() => {
    axios
      .get(`https://apitest.reachstar.io/blog/get/${id}`)
      .then(function (response) {
        setData(response.data);
        setEditedTitle(response.data.title || "");
        setEditedContent(response.data.description || "");
        
      })
      .catch(function (error) {
        console.log("API Error:", error);
      });
  }, [id]);

  const deleteBlog = () => {
    axios
      .delete(`https://apitest.reachstar.io/blog/delete/${id}`)
      .then(function (response) {
        console.log("Delete successful:", response.data);
        navigate("/Dashboard");
      })
      .catch(function (error) {
        console.log("Delete error:", error);
      });
  };

  const edit = () => {
    axios
      .put(`https://apitest.reachstar.io/blog/edit/${id}`, {
        title: editedTitle,
        description: editedContent,
      })
      .then(function (response) {
        console.log("Edit successful:", response.data);
        setEditMode(false);
        setData(response.data);
      })
      .catch(function (error) {
        console.log("Edit error:", error);
      });
  };

  const postComment = () => {
    axios
      .post(`https://apitest.reachstar.io/comment/add/${id}`, {
        comment : comment,
      })
      .then(function (response) {
        console.log("Comment posted successfully:", response.data);
        window.alert("Comment posted successfully");
        navigate("/Details");
      })
      .catch(function (error) {
        console.log("Comment post error:", error);
      });
  };


  useEffect(() => {
    axios
      .get('https://apitest.reachstar.io/blog/list')
      .then((response) => setCommentContent(response.data) ).
      catch(function (error) {
        console.log("API Error:", error);
      });
  }, []);

 
  const findComment = commentContent.find((news)=>{
    
    return id === news.id.toString()
  });

  const deleteComment = (commentId) => {
    axios
      .delete(`https://apitest.reachstar.io/comment/delete/${commentId}`)
      .then(function (response) {
        console.log("Comment deleted successfully:", response.data);

        window.location.reload();
      })
      .catch(function (error) {
        console.log("Comment delete error:", error);
      });
  };




  return (
    <div className="w-100 landingDetails">
      
      <Navbar />
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col-12">
            {data.id ? (
              <div className="w-100 bg-light animatedDiv p-3">
                <input
                  type="text"
                  className="detailsInput"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  disabled={!editMode}
                />
                {editMode ? (
                  <ReactQuill
                    theme="snow"
                    className="editor"
                    value={editedContent}
                    onChange={setEditedContent}
                  />
                ) : (
                  <p className="detailsDescription" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                )}

                {/* edit & delete section */}
                <div className="w-100 btn-group mt-3 mb-3" role="group" aria-label="Basic example">
                  {editMode ? (
                    <button className="editbtn" onClick={edit}>
                      Save Changes
                    </button>
                  ) : (
                    <button className="editbtn" onClick={() => setEditMode(true)}>
                      Edit Blog
                    </button>
                  )}
                  <button className="editbtn" onClick={deleteBlog}>
                    Delete Blog
                  </button>
                </div>

                {/* Comment section */}
                <div className="container mt-5 pb-5">
                  <div className="row">
                    <div className="col-12 ps-5 pe-5">
                      <div className="commentBox w-100">
                        <ReactQuill
                          theme="snow"
                          className="editor-comment"
                          value={comment}
                          onChange={setComment}
                        />
                        <button className="commentbtn" onClick={postComment}>
                          Post Comment
                        </button>
                      </div>

                      <div className="w-100 mt-5 pt-2">

                      <h6 className="commentsDetails">Comments</h6>

                      {findComment && findComment.comments && (
                        <div className="w-100 mt-5">
                          {findComment.comments.map((comment) => (
                            <div className="pt-5" key={comment.comment_id}>
                              <a className="userId" dangerouslySetInnerHTML={{ __html: comment.user_id }}></a>
                              <div className="mt-2 p-2 position-relative" style={{ border: "solid 1px #333333" }}>
                                <p className="commentGet" dangerouslySetInnerHTML={{ __html: comment.comment }}></p>
                                <button className="deleteComent" onClick={() => deleteComment(comment.id)}>Delete</button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
