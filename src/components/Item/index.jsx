import React from 'react'

const Item = ({ title, content }) => {
  console.log(title)
  console.log(content)
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src="https://www.lg.com/uk/images/monitors/md06014999/gallery/large01.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
        </div>
        <div className="card-footer">
          <a href="/#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}

export default Item
