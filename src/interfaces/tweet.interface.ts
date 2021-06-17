export interface ResponseTwitter {
  data: Tweet[]
}

export interface Tweet {
  created_at: Date
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
  type: Type
  url?: string
}

export enum Type {
  Photo = "photo",
  Video = "video",
}
