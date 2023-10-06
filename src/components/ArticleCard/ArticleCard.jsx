const ArticleCard = ({ title, content, presentationImage, author, publicationDate }) => {
  const { authorName, authorAvatar } = author;

  return (
    <article className="ArticleCard">
      <img src={presentationImage || '/drawers.jpg'} alt="Presentation image" loading="lazy" className="ArticleCard-image" />

      <main className="ArticleCard-main">
        <h2 className="ArticleCard-h2">{title}</h2>

        <p className="ArticleCard-paragraph">{content}</p>

        <div className="ArticleCard-author">
          <div className="ArticleCard-authorInfo">
            <img src={authorAvatar} alt="Author avatar" className="ArticleCard-authorAvatar" />

            <div className="ArticleCard-authorInfoText">
              <h3 className="ArticleCard-h3">{authorName}</h3>
              <p className="ArticleCard-paragraph">{publicationDate}</p>
            </div>
          </div>

          <img src="/icon-share.svg" alt="" />
        </div>
      </main>
    </article>
  );
};

export default ArticleCard;
