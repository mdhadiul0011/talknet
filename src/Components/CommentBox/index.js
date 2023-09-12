import React, { useState } from 'react'
import './style.scss'
import { BsThreeDots } from 'react-icons/bs';
import { GrSend } from 'react-icons/gr';
import { useSelector } from 'react-redux';


const CommentBox = () => {
  const users = useSelector((user)=> user.loginSlice.login)
    const [commentDelete, setCommentDelete] = useState(false);
    const [commentInput, setCommentInput] = useState(false)

  return (
    <div className='main-comment-box'>
        <div className={`${commentInput ? 'cmnt-inpt-actv': 'cmnt-inpt-inactv'}`}>
            <div className='cmnt-inpt-img'>
            <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
            </div>
            <div className='cmnt-txtfld'>
                <input className='textfeild' type='text' placeholder='write your comment..'/>
            </div>
            <div className='cmnt-inpt-icon'>
                <GrSend/>
            </div>
        </div>
        <div className='comment-box'>
          <div className='frnd-comment'>
            <div className='comment-head'>
              <div className='comment-img-name'>
                <div className='comment-img'>
                <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
                </div>
                <div className='comment-text'>
                  <h3>{users.displayName}</h3>
                  <p>23 minutes ago</p>
                </div>
              </div>
              <div className='comment-icon' onClick={()=>setCommentDelete(!commentDelete)}>
                <BsThreeDots/>
              </div>
              <div className={`${commentDelete ? 'activeDelete2' : 'inactiveDelete2'}`}>
                <p>Delete</p>
              </div>
            </div>
            <div className='comments'>
              <p>Comment a click korle ekta input box asbe sei input box a ekta input r ekta done button thakbe sei done button a click korle comment ta show korbe.. comment er name change hobe time change hobe and text change hobe </p>
            </div>
          </div>
        </div>
        <div className='post-like-comment home-btn'>
          <button>Like</button>
          <button onClick={()=> setCommentInput (!commentInput)}>Comment</button>
        </div>
    </div>
  )
}

export default CommentBox;
