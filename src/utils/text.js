export const getImageFromHTML = (image, content, description) => image
  || content.match(/\bhttps?:[^)''"]+\.(?:jpg|jpeg|gif|png)(?![a-z/])/)
  || description.match(/\bhttps?:[^)''"]+\.(?:jpg|jpeg|gif|png)(?![a-z/])/);
