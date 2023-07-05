import {React,useEffect,useState} from 'react'
import './Communityhome.css'
import {useParams} from 'react-router-dom';
import Navbar from './Navbar';
import {DefaultPlayer as Video} from 'react-html5video';
import introVideo1 from './videos/video1.mp4'
import introVideo2 from './videos/video2.mp4'
import introVideo3 from './videos/video3.mp4'
import 'react-html5video/dist/styles.css'
import './reactvideo.css'



export default function CommunityHome() {
// const {token}=useParams("token")
console.log("Token In Home "+ localStorage.getItem('token'))
// const res1 = fetch("https://api.cloudinary.com/v1_1/commcloud/image/upload",{
// })
const [data,setData] =useState([]);
const [comment, setComment] = useState("");
const [show, setShow] = useState(false);
const [item, setItem] = useState([]);
const token=localStorage.getItem('token');

useEffect(() => {
    fetch(`http://localhost:4000/api/post/allposts/${token}`,{
        method:"get",
    })
    .then(res=>res.json())
    .then((data1)=>{
        console.log(data1);
        setData(data1)
        });

}, []);

const likePost = (id) => {
    console.log("in likePost function "+id )
    fetch(`http://localhost:4000/api/post/likes/${token}`, {
    method: "put",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify({
        postId: id
    }),
    })
    .then((res) => res.json())
    .then((result) => {
        const newData = data.map((posts) => {
        if (posts._id == result._id) {
            return result;
        } else {
            return posts;
        }
        });
        setData(newData);
        console.log(result);
    });
};
    const unlikePost = (id) => {
    fetch(`http://localhost:4000/api/post/unlike/${token}`, {
        method: "put",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        postId: id,
        }),
    })
        .then((res) => res.json())
        .then((result) => {
        const newData = data.map((posts) => {
            if (posts._id == result._id) {
            return result;
            } else {
            return posts;
            }
        });
        setData(newData);
        console.log(result);
        });
  };

  const toggleComment = (posts) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      console.log("printing comment in home.js "+ item);
      setItem(posts);
    }
  };

    // function to make comment
const makeComment = (text, id) => {
    console.log("pirnting text in comment function  "+text);
    console.log("pirnting id in comment function  "+id);
        fetch(`http://localhost:4000/api/post/makeComments/${token}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: text,
            postId: id,
        }),
        })
        .then((res) => res.json())
        .then((result) => {
            const newData = data.map((posts) => {
            if (posts._id == result._id) {
                return result;
            } else {
                return posts;
            }
            });
            console.log("This is new Data "+newData);
            setData(newData);
            setComment("");
            console.log("aassss "+result);
        });
    };
// console.log("hello this is res1 " + res1);

return (
    
    <div>
    <Navbar />
      <div className='comm-card-background-image'>
      {/* <Video autoPlay loop className="video-play">
           <source src={introVideo1} type="video/webm" />
       </Video><Video autoPlay loop className="video-play">
               <source src={introVideo2} type="video/webm" />
           </Video><Video autoPlay loop className="video-play">
               <source src={introVideo3} type="video/webm" />
           </Video> */}
<div className="comm-home">
    {data.map((posts)=>{
        return (

            <div className="comm-card">

            <div className="comm-card-header">
                <div className="comm-card-pic">
                    <img src={posts.postedBy.url}  alt="">
                    </img>
                </div>
                <h4>{posts.postedBy.name}</h4>
            </div>
            {/* card image */}
            <div className='comm-card-image'>
                <img src ={posts.pic} alt ="">
                </img>
            </div>
            {/* card content  */}
            <div className='comm-card-content'>
                {/* like and unlike function */}
                {posts.likes.includes(localStorage.getItem("user")) ? (
            <span
                className="material-symbols-outlined material-symbols-outlined-red"
                onClick={() => {
                    console.log("unlike button press karon    ")
                unlikePost(posts._id);
                }}
            >
                favorite
            </span>
            ) : (
            <span
                className="material-symbols-outlined"
                onClick={() => {
                    console.log("like button press karon       "+ posts._id)
                likePost(posts._id);
                }}
            >
                favorite
            </span>
            )}
            <p>{posts.likes.length} like</p>
            <p>{posts.body}</p>
            <p
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => {
                if (show) {
                    setShow(false);
                    } else {
                    setShow(true);
                    console.log("printing comment in home.js "+ item);
                    setItem(posts);
                    }
                }}
            >
                View all comments
            </p>
            </div>


            {/* add comment */}
            <div className="comm-add-comment">
            <span className="material-symbols-outlined">mood</span>
            <input
            type="text"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => {
                setComment(e.target.value);
            }}
            />
            <button
            className="comm-comment"
            onClick={() => {
                makeComment(comment, posts._id);
            // if (show) {
            //     setShow(false);
            //     } else {
            //     setShow(true);
            //     console.log("printing comment in home.js "+ item);
            //     setItem();
            //     }
            }}
            >
            Post
            </button>
        </div>
            </div>
        );
    })}
    {/* show Comment */}
  {show && (
    <div className="comm-showComment">
      <div className="comm-container">
        <div className="comm-postPic">
          <img src={item.pic} width={500} height={500} alt="" />
        </div>
        <div className="comm-details">
          {/* card header */}
          <div
            className="comm-card-header"
            style={{ borderBottom: "1px solid #00000029" }}
          >
            <div className="comm-card-pic">
              <img
                src={item.postedBy.url}
                alt=""
              />
            </div>
            <h5>{item.postedBy.name}</h5>
          </div>
          {/* commentSection */}
          <div
            className="comm-comment-section"
            style={{ borderBottom: "1px solid #00000029" }}
          >
            {item.comments.map((comment) => {
              return (
                <p className="comm-comm">
                <span
                    className="comm-commenter"
                    style={{ fontWeight: "comm-bolder" }}
                >
                    {comment.postedBy.name +" : "}
                    {" "}
                  </span>
                  <span className="comm-commentText">{comment.comment}</span>
                </p>
              );
            })}
          </div>

          {/* card content */}
          <div className="comm-card-content">
            <p>{item.likes.length} Likes</p>
            <p>{item.body}</p>
          </div>

          {/* add Comment */}
          <div className="comm-add-comment">
            <span className="material-symbols-outlined">mood</span>
            <input
              type="text"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
            <button
              className="comment"
              onClick={() => {
                makeComment(comment, item._id);
                toggleComment();
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <div
        className="close-comment"
        onClick={() => {
          toggleComment();
        }}
      >
        <span className="material-symbols-outlined material-symbols-outlined-comment">
          close
        </span>
      </div>
    </div>
  )}
</div>
</div>
    </div>
  )
}
