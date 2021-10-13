import axios from "axios";

export async function MemberService():Promise <any> {
  
    let news = await axios.get(`http://localhost:8080/api/members`);
    return news;

}