import {useEffect, useState} from "react";
import axios from "axios";

const Message = () => {
  const [message, setMessage] = useState(false)

  useEffect(() => {
    const fetchMessage = async () => {
      try{
      const response = await axios.get("http://localhost:8000/message");
      console.log(response.data)
      setMessage(response.data)
      } catch (e) {
        console.log("Error!")
      }
    }
    fetchMessage()
  })

    return (

      <div className="Message">
        The reponse from backend is: '{message}'
      </div>);
}

export default Message;