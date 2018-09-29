export const getImageFromHTML = (image, description) => image 
  || description.match(/\bhttps?:[^)''"]+\.(?:jpg|jpeg|gif|png)(?![a-z/])/);
