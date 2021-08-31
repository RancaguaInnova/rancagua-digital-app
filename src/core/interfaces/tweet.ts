export interface ResponseTwitter {
  data: Tweet[]
}

export interface Tweet {
  created_at: string
  author_id: string
  text: string
  id: string
  attachments?: Attachments
}

export interface Attachments {
  media_keys: MediaKey[]
}

export interface MediaKey {
  media_key: string
  preview_image_url?: string
  type: string
  url?: string
}
