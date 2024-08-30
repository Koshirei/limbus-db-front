/**
 * return the path of the image
 * @param path path with format 'folder' or 'folder/',
 * @param fileName file name without extension,
 * @param extension defaults to .webp, optional. '.' is mandatory if the parameter is setted
 */
export const getImagePath = (path: string, fileName: string, extension: string = '.webp') => {
  let finalePath = path
  if (path[path.length - 1] !== '/') {
    finalePath += '/'
  }
  return import.meta.env.VITE_IMG_CDN + finalePath + fileName + extension
}