import { AppContext } from "@/helpers/Helpers";
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import Tweet from "./Tweet";
import { TweetsContainer } from "./Tweets.styled";
import { RiQuillPenLine } from "react-icons/ri";
import TweetModal from "@/components/tweetmodal/Tweetmodal";

const Tweets = (props: any) => {
  const {
    tweets,
    isLoading,
    tweetModal,
    setTweetModal,
    observerRef,
  } = useContext(AppContext);
  const [userMap, setUserMap] = useState<any>([]);
  const [addedToBookmark, setAddedToBookmark] = useState<boolean>(false);

  return (
    <TweetsContainer>
      <div className="tweetsContainer">
        {tweets?.map((tweet: any, index: any) => {
          return (
            <div key={tweet?._id}>
              <Tweet tweet={tweet} setAddedToBookmark={setAddedToBookmark} />
            </div>
          );
        })}
        {isLoading && (
          <div className="loadingBar">
            <span style={{ textAlign: "center" }} className="loader"></span>
          </div>
        )}
        <div ref={observerRef} style={{ height: "10px" }} />
        <div
          role="button"
          className="quill"
          onClick={() => setTweetModal(true)}
        >
          <p className="tweetIconBtn">
            {
              <RiQuillPenLine
                style={{
                  background: "#1d9aef",
                  padding: "10px 10px",
                  fontSize: 55,
                  borderRadius: "50px",
                }}
              />
            }{" "}
          </p>
        </div>
        {TweetModal && (
          <div className={tweetModal ? "active" : "inactive"}>
            <TweetModal />
          </div>
        )}
        {addedToBookmark ? (
          <p className="bookmarkAdded">Tweet added to bookmark</p>
        ) : (
          ""
        )}
      </div>
    </TweetsContainer>
  );
};

export default Tweets;