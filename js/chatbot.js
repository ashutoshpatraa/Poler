$(document).ready(function () {
    const chatMessages = $('#chatMessages');
    const textInput = $('#textInput');
    const sendButton = $('#sendButton');
  
    sendButton.click(function () {
      const userMessage = textInput.val();
      appendMessage('You', userMessage, 'right');
      textInput.val('');
      botResponse(userMessage);
    });
  
    function appendMessage(sender, message, side) {
      const messageHTML = `
        <div class="message ${side}-message">
          <div class="message-bubble">
            <span class="message-text">${message}</span>
          </div>
          <span class="message-sender">${sender}</span>
        </div>
      `;
      chatMessages.append(messageHTML);
      chatMessages.scrollTop(chatMessages.prop('scrollHeight'));
    }
  
    function botResponse(userMessage) {
      $.get('/get', { msg: userMessage }).done(function (data) {
        const botMessage = data;
        appendMessage('TATE BOT', botMessage, 'left');
      });
    }
  });
  