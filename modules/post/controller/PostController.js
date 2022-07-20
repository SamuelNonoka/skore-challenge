import PostRepository from '../repository/PostRepository.js'

class PostController {
  constructor (apoloClient) {
    this._repository = new PostRepository(apoloClient)
  }

  async getAll () {
    return await this._repository.getContents()
  }

  async getById (id) {
    return await this._repository.getContentById(id)
  }
}

export default PostController
