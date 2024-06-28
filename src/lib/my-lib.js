import { format } from 'date-fns';

export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const createAvatarFromText = (text) => {
  let text_ = text.trim();
  let lenText = text_.length;
  if(lenText <= 2) {
    return(text_).toUpperCase();
  }

  let ss = text_.split(" ")
  if(ss.length === 1) {
    return (ss[0].substring(0, 2)).toUpperCase()
  }
  else {
    return (ss[0][0] + ss[1][0]).toUpperCase()
  }
}

export const formatTextToDateTime = (text) => {
  const dateObj = new Date(text);
  return(format(dateObj, "MMMM d, yyyy 'at' HH:mm"));
}