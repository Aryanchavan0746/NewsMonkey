import React from "react";

const NewsItem = (props) =>{
  
    let { title, description, ImageUrl, newsUrl, author, date, source } = props;
    return (
      <div container="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className=" badge rounded-pill bg-danger"> {source}</span>
          </div>

          <img
            src={
              !ImageUrl
                ? "https://media.crictracker.com/media/attachments/1700990757341_Mumbai-Indians.jpeg"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noopener"
              href={newsUrl}
              target="_blank"
              className="btn  btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
