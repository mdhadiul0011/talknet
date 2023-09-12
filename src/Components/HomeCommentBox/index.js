import React, { useState } from 'react'
import './style.scss'
import { BsThreeDots } from 'react-icons/bs';
import { GrSend } from 'react-icons/gr';
import { useSelector } from 'react-redux';

const HomeComment = () => {
    const users = useSelector((user)=>user.loginSlice.login)
    const [commentDelete, setCommentDelete] = useState(false);
    const [commentInput, setCommentInput] = useState(false)
    const [avatar, setAvatar] = useState()


  return (
    <div className='home-main-comment-box'>
        <div className={`${commentInput ? 'home-cmnt-inpt-actv': 'home-cmnt-inpt-inactv'}`}>
            <div className='home-cmnt-inpt-img'>
                <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
            </div>
            <div className='home-cmnt-txtfld'>
                <input className='home-textfeild' type='text' placeholder='write your comment..'/>
            </div>
            <div className='home-cmnt-inpt-icon'>
                <GrSend/>
            </div>
        </div>
        <div className='home-comment-box'>
          <div className='home-frnd-comment'>
            <div className='home-comment-head'>
              <div className='home-comment-img-name'>
                <div className='home-comment-img'>
                <img src={users.photoURL || './img/avatar2.png'}
                onError={(e)=> {
                  e.target.src = './img/avatar2.png'
                }}
              />
                </div>
                <div className='home-comment-text'>
                  <h3>{users.displayName}</h3>
                  <p>23 Minutes ago</p>
                </div>
              </div>
              <div className='home-comment-icon' onClick={()=>setCommentDelete(!commentDelete)}>
                <BsThreeDots/>
              </div>
              <div className={`${commentDelete ? 'activeDelete2' : 'inactiveDelete2'}`}>
                <p>Delete</p>
              </div>
            </div>
            <div className='home-comments'>
              <p>Comment a click korle ekta input box asbe sei input box a ekta input r ekta done button thakbe sei done button a click korle comment ta show korbe.. comment er name change hobe time change hobe and text change hobe </p>
            </div>
          </div>
        </div>
        <div className='home-btn'>
          <button>Like</button>
          <button onClick={()=> setCommentInput (!commentInput)}>Comment</button>
        </div>
    </div>
  )
}

export default HomeComment;
