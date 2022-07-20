import gql from 'graphql-tag'
import PostDto from '../models/PostDto.js'

class PostRepository {
  constructor (client) {
    this._apoloClient = client
  }
  
  async getContents () {
    const _CONTENTS_QUERY = gql`
      query {
        contents {
          id,
          title,
          description,
          type,
          url,
          embeddable,
          allow_download,
          created_at,
          updated_at
        }
      }
    `

    const response = await this._apoloClient.query({
      query: _CONTENTS_QUERY
    })

    const contents = response.data.contents
    
    return contents.map((item) => {
      const post = new PostDto(
        item.id,
        item.title,
        item.description,
        item.type,
        item.url,
        item.embeddable,
        item.allow_download,
        item.created_at,
        item.updated_at
      )
      return post
    })
  }

  async getContentById (id) {
    const _CONTENTS_QUERY = gql`
      query getContent($id: String!) {
        getContent (id: $id) {
          id,
          title,
          description,
          type,
          url,
          embeddable,
          allow_download,
          created_at,
          updated_at
        }
      }
    `

    const response = await this._apoloClient.query({
      query: _CONTENTS_QUERY,
      variables: {
        id
      }
    })

    const content = response.data.getContent
    
    return new PostDto(
      content.id,
      content.title,
      content.description,
      content.type,
      content.url,
      content.embeddable,
      content.allow_download,
      content.created_at,
      content.updated_at
    );
  }
}

export default PostRepository
