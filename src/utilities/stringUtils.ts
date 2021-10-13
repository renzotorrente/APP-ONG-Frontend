export const capitalize =  (text:string):string => {
  if(typeof text !== "string") return "";
  return text.length > 1 ? text.charAt(0).toUpperCase() + text.slice(1) :
         text.length === 1 ? text.toUpperCase() : "";
}