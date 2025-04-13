import checkmark from "./img/check.png";
import comment from "./img/comment.png";
import like from "./img/like.png";

const photo =
  "https://img.tsn.ua/cached/914/tsn-1ebf7e0831dcb00a7ce65c0ae2fc892d/thumbs/1116x628/f1/bf/f3fbddecb7fba8ecea3eec8bde41bff1.jpg";
const avatar =
  "https://detector.media/doc/images/news/archive/2021/229825/ArticleImage_229825.jpg?t=1721501818";

const post = {
  author: {
    name: "Iryna Farion",
    photo: photo,
    nickname: "@orlytsia",
  },
  content:
    "Мову не знають ті, які або політично упереджені, або розумово відсталі. Отже, в якій системі координат перебуваєте власне Ви?",
  image: avatar,
  date: "13 Dec 2012",
  icon: checkmark,
  comment: comment,
  like: like,
};

const MyPost = ({ post }) => {
  const {
    author: { name, photo, nickname },
    content,
    image,
    date,
    icon,
    comment,
    like,
  } = post;
  return (
    <>
      <div className="Post-row">
        <img src={image} className="Post-avatar" alt="Iryna Farion avatar" />
        <h3>{name}</h3>
        <img src={icon} alt="Checkmark icon" />
        <h3>{nickname}</h3>
        <span>
          <b>{date}</b>
        </span>
      </div>
      <p className="Post-content">
        <b>
          <em>{content}</em>
        </b>
      </p>
      <img src={photo} className="Post-photo" alt="Iryna Farion" />
      <div className="Post-icons">
        <div className="Post-comment">
          <img src={comment} alt="Comment icon" />
          <span>
            <b>456</b>
          </span>
        </div>
        <div className="Post-like">
          <img src={like} alt="Like icon" />
          <span>
            <b>12829</b>
          </span>
        </div>
      </div>
    </>
  );
};

function Post() {
  return (
    <div className="Post">
      <MyPost post={post} />
    </div>
  );
}

export default Post;
