import React from 'react'

const Item = ({ title, content }) => {
  return (
    <div class="col">
      <div class="card h-100">
        <img
          src="https://www.lg.com/uk/images/monitors/md06014999/gallery/large01.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{content}</p>
        </div>
        <div class="card-footer">
          <a href="/#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}

export default Item
