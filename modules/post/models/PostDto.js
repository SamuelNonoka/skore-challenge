class PostDto {
  constructor(id, title, description, type, url, embeddable, allowDownload, createdAt, updatedAt) {
    this._id = id
    this._title = title
    this._description = description
    this._type = type
    this._url = url
    this._embeddable = embeddable
    this._allowDownload = allowDownload
    this._createdAt = createdAt
    this._updatedAt = updatedAt
  }

  get id () {
    return this._id
  }

  get title () {
    return this._title
  }

  get description () {
    return this._description
  }

  get type () {
    return this._type
  }

  get url () {
    return this._url
  }

  get embeddable () {
    return this._embeddable
  }

  get allowDownload () {
    return this._allowDownload
  }

  get createdAt () {
    return this._createdAt
  }

  get updatedAt () {
    return this._updatedAt
  }
}

export default PostDto
