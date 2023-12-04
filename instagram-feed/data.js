const initialData = {
  articles: [
    {
      id: 1,
      avatar: require("../assets/instagram-feed-images/avatar.png"),
      name: "User One",
      image: require("../assets/instagram-feed-images/img1.jpg"),
      likes: 100,
      commentCount: 5,
      comments: ["Great article!", "Thanks for sharing!", "Interesting read."],
    },
    {
      id: 2,
      avatar: require("../assets/instagram-feed-images/avatar1.jpg"),
      name: "User Two",
      image: require("../assets/instagram-feed-images/img2.jpg"),
      likes: 150,
      commentCount: 8,
      comments: ["Love this!", "So informative.", "I learned a lot."],
    },
    {
      id: 3,
      avatar: require("../assets/instagram-feed-images/avatar2.jpg"),
      name: "User Three",
      image: require("../assets/instagram-feed-images/img3.jpg"),
      likes: 200,
      commentCount: 12,
      comments: [
        "Amazing content.",
        "Really well-written.",
        "Looking forward to more.",
      ],
    },
    {
      id: 4,
      avatar: require("../assets/instagram-feed-images/avatar3.jpg"),
      name: "User Four",
      image: require("../assets/instagram-feed-images/img4.jpg"),
      likes: 75,
      commentCount: 3,
      comments: ["Good job!", "Nice article."],
    },
  ],
};

export default initialData;
