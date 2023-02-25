import { useState } from "react";
import Image from "next/image";
import { CommonButton } from "@/common/CommonButton";

export const CommentWrapper = () => {
  const [reviewData, setReviewData] = useState(reviews);
  // console.log({ reviewData });

  return (
    <>
      <div className="w-full max-w-3xl p-4 md:p-8">
        <div className="w-full flex justify-center items-center ">
          <Image
            width={400}
            height={320}
            src="/images/ziraya.png"
            alt="ziraya.png"
            className="w-9/12 lg:w-8/12"
          />
        </div>
        <div className="flex border-l-[5px] px-3   border-deco-red justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Post Your Comment
          </h2>
        </div>

        <div className="w-full ">
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-darkTheme-700 dark:border-gray-700">
              <textarea
                id="comment"
                className="px-0 w-full h-[8rem] text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-darkTheme-700"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <CommonButton
              btnLabel="Post Comment"
              btnIcon="ri:send-plane-fill"
              customClass="border border-deco-red"
              bgBlack
            />
          </form>
        </div>
        <div className="w-full my-4">
          <div className="p-2 flex justify-start items-center font-semibold text-2xl leading-5 capitalize pl-5 relative after:content[''] after:absolute after:w-1 after:h-8 after:left-0 after:first-line:top-0 after:mr-3 after:bg-deco-red ">
            {`Discussion ${
              reviewData.length > 0 && `( ${reviewData.length} )`
            }`}
          </div>
        </div>
        {reviewData.map((review: any, index: number) => (
          <div key={`${review.label}-${index}`}>
            <SingleReview
              username={review.username}
              profileImage={review.prodileImage}
              comment={review.comment}
              date={review.datePosted}
              reply={review.reply}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export const SingleReview = ({
  username,
  profileImage,
  date,
  comment,
  reply,
  responseEle = false,
}: any) => {
  console.log({ responseEle });
  const [moreReview, setMoreReview] = useState(false);
  const handleMoreReply = () => {
    setMoreReview(!moreReview);
  };
  const handleClick = () => {
    console.log("parent click");
  };
  return (
    <article
      className={`mb-6 text-base bg-white  dark:bg-darkTheme-700 ${
        responseEle
          ? "py-6 px-3 border-l-2 rounded border-deco-red mt-3"
          : "rounded-lg p-6 shadow-md shadow-black"
      }`}
    >
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="w-8 h-8 overflow-hidden mr-2 rounded-full">
            <Image width={32} height={32} src={profileImage} alt={username} />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              {username}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time title="February 8th, 2022">{date}</time>
            </p>
          </div>
        </div>
        <div
          id="dropdownComment1"
          className={`hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment}</p>
      <div className="flex items-center mt-4 space-x-4">
        <CommonButton
          btnLabel="Reply"
          btnIcon="uil:comment-message"
          textButton
        />
        {reply?.length > 0 && (
          <CommonButton
            btnLabel={moreReview ? "Hide Reply" : "View Reply"}
            btnIcon="icon-park-outline:view-list"
            textButton
            handleClick={handleMoreReply}
          />
        )}
      </div>
      {moreReview &&
        reply &&
        reply.map((review: any, index: number) => (
          <div key={`${review.label}-${index}`}>
            <SingleReview
              username={review.username}
              profileImage={review.prodileImage}
              comment={review.comment}
              date={review.datePosted}
              reply={review.reply}
              responseEle
            />
          </div>
        ))}
    </article>
  );
};

const reviews = [
  {
    username: "Manish Yadav",
    prodileImage:
      "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    datePosted: "5 hours ago",
    comment:
      "I started watching anime because of my recommendation on YouTube.",
    reply: [
      {
        username: "DisturbingAgent",
        prodileImage:
          "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
        datePosted: "Feb. 12, 2022",
        comment:
          "Streaming experience: Compared to other anime streaming sites, the loading speed at Zoro.to is faster. Downloading is just as easy as streaming, you won't have any problem saving the videos to watch offline later.",
        reply: [
          {
            username: "One More Dude",
            prodileImage:
              "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
            datePosted: "Feb. 12, 2022",
            comment: "sub comment",
          },
        ],
      },
      {
        username: "One More Dude",
        prodileImage:
          "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
        datePosted: "Feb. 12, 2022",
        comment: "sub comment",
      },
    ],
  },
  {
    username: "SegsyRedHair Crab",
    prodileImage:
      "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    datePosted: "5 hours ago",
    comment:
      "POV - I literally love the 2D waifus . NGL I have no interest in real life women,( and I am not gay )",
  },
  {
    username: "Dude in Wood",
    prodileImage:
      "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    datePosted: "5 hours ago",
    comment: "It sucks knowing people don't like it",
  },
];
