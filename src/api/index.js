import request from '@/utils/request'

export const fetchSongs = () => {
  return request.fetch('/photos')
}

export const fetchAlbums = () => {
  return request.fetch('/albums')
}
