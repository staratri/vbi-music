export const mapSongsWithAlbums = (songs, albums) => {
  return songs.map(song => {
    const album = albums.find(album => album.id === song.albumId)
    return {
      ...song,
      albumName: album.title
    }
  })
}
