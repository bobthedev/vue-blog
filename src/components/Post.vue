<template lang="pug">
.post
  //- Post Header -//
  .post-header
    .post-header-profile
      img(src="../assets/bob-profile-min.png" )
    .post-header-author
      .post-header-author-name
        span(id="author-name") Bob Lee
      .post-header-author-bio
        span(id="author-bio") iOS Instructor from South Korea. Love cooking and helping others build great product
      .post-header-post-summary
        span(id="post-description") 5 min read • Feb 29th, 2017

  //- Post Description -//
  .post-description
    .post-description-title
      h1 How to become an iOS developer
    .post-description-subtitle
      h2 iOS Development is hard. Embrace it and deal with it.
    .post-description-cover
      img(src="../assets/small-thumbnail-placeholder.png" id="cover-photo")

  //- Post Content -//
  .post-content
    h3 Why Completion Handlers
    p Before we dive into a technical aspect, let’s talk about what it means to use completion handlers. Assume the user is updating an app while using it. You definitely want to notify the user when it is done. You possibly want to pop up a box that says,“Congratulations, now, you may fully enjoy!”
    p So, how do you run a block of code only after the download has been completed? Further, how do you animate certain objects only after a view controller has been moved to the next? Well, we are going to find out how to design one like a boss.

    h3 Why Completion Handlers
    p Before we dive into a technical aspect, let’s talk about what it means to use completion handlers. Assume the user is updating an app while using it. You definitely want to notify the user when it is done. You possibly want to pop up a box that says,“Congratulations, now, you may fully enjoy!”
    p So, how do you run a block of code only after the download has been completed? Further, how do you animate certain objects only after a view controller has been moved to the next? Well, we are going to find out how to design one like a boss.

    h3 About
    p iOS Developer from South Korea. Feel free to follow my story on Instagram or get serious on LinkedIn.
    .post-content-tags
      ul
        li swift
        li delegate
        li singleton
    .post-content-divider

  //- Post Share -//
  .post-share
    .post-share-message
      span(id="share") Share
      <br />
      span(id="share-message") If you've found this article helpful, help us reach more develoeprs
    .post-share-divider
    .post-share-icons
      img(src="../assets/icons/twitter-clear-logo.png" id="twitter")
      img(src="../assets/icons/facebook-clear-logo.png" id="facebook")
      img(src="../assets/icons/linkedin-clear-logo.png" id="linkedin")

  .post-divider
  //- Comment - //
  .post-comment
    .post-comment-header
      span Responses
    .post-comment-input
      .post-comment-input-profile
        img(src="../assets/placeholder-profile1.png" id="comment-profile")
      .post-comment-input-field
        textarea(placeholder="Write a comment" )
    .post-comment-button
      button Publish

    .post-comment-container
      //- Individual Comment -//
      .post-comment-container-individual
        .post-comment-container-individual-profile
          img(src="../assets/placeholder-profile1.png")
        .post-comment-container-individual-content
          .post-comment-container-individual-content-message
            p #[span(id="comment-name") Ale] I have completed Bob's intermediate to Advanced Swift course. As the course title states, you really learn Swift with Bob.
          .post-comment-container-individual-content-information
            span(id="like") Like
            span(id="date") • July 24 at 3:53pm

      //- Individual Comment -//
      .post-comment-container-individual
        .post-comment-container-individual-profile
          img(src="../assets/placeholder-profile1.png")
        .post-comment-container-individual-content
          .post-comment-container-individual-content-message
            p #[span(id="comment-name") Ale] I have completed Bob's intermediate to Advanced Swift course. As the course title states, you really learn Swift with Bob.
          .post-comment-container-individual-content-information
            span(id="like") Like
            span(id="date") • July 24 at 3:53pm
</template>

<script>
import axios from 'axios'

export default {
  async created () {
    const response = await axios.get(`http://localhost:5000/blog/posts`)
    this.posts = response.data
  },
  data () {
    return {
      random: ''
    }
  }
}
</script>
<style lang="scss">
@import '../styles/post';
</style>
