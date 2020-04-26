import ChatBotStyles from "./ChatBot.module.scss";


const ChatBot = (Config) =>{
console.log('ChatBot',Config)
return (
  <div id="chatbox" className={ChatBotStyles.chatbox}>

  
  <div id="chatview" className="p1">      
      {/* <div id="profile" className={ChatBotStyles.profile}>

          <div id="close">
              <div className="cy"></div>
              <div className="cx"></div>
          </div>
          
          <p>Miro Badev</p>
          <span>miro@badev@gmail.com</span>
      </div> */}
      <div id="chat-messages" className={ChatBotStyles.chatmessages}>
          {/* <label>Thursday 02</label> */}
          
          <div className={ChatBotStyles.message}>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
              <div className={ChatBotStyles.bubble}>
                  Really cool stuff!
                  <span>3 min</span>
                  <div className={ChatBotStyles.corner}></div>
                 
              </div>
          </div>
          
          <div className={ChatBotStyles.messageright}>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
                <div className={ChatBotStyles.bubble}>
                  Can you share a link for the tutorial?
                  <div className={ChatBotStyles.messageright.corner}></div>
                  <span>1 min</span>
              </div>
          </div>
          
         
          
          <div className={ChatBotStyles.message}>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
              <div className={ChatBotStyles.bubble}>
                  Really cool stuff!
                  <div className={ChatBotStyles.corner}></div>
                  <span>3 min</span>
              </div>
          </div>
          
      </div>
      
      <div id="sendmessage" className={ChatBotStyles.sendmessage}>
          <input type="text" value="Send message..." />
          <button id="send"></button>
      </div>
  
  </div>        
</div>  
)}
export default ChatBot
