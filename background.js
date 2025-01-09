/*
Just draw a border round the document.body.
*/
console.log('yes11');
$(document).ready(function() {
    console.log("Function is ready!");

    // Wait for 1 second (1000 milliseconds)
    setTimeout(function() {
        
      
    const my_api_link = 'https://memojobs.com/bw/';

      
//           var phoneNumber = '+918604404079';
//           var message = 'Hello, this is a test message!'; 
      


  var dataString11 = '&form_id='+'4&html=qw';
   $.ajax({
          type: 'POST',
          url: my_api_link,
          data:dataString11,        
          success: function (response) {

            const data = JSON.parse(response);
              console.log(data[0]) ;
             console.log('dd') ;
             console.log(data[1]) ;
                            
            const number11 = data[0].number;
            const number22 = data[1].number;
            const msg_send = data[0].msg;
             const next_msg_send = data[1].msg;
            
            console.log(number11) ;
            
            const break_between_msg = data[0].break * '1000';
            
               
   console.log(number22) ;

    // Wait for the chat to load, then send the message
    const interval = setInterval(() => {
        
      
      const sendButton = document.querySelector('button[aria-label="Send"]');

      // Check if the button exists before attempting to click
      if (sendButton) {
          sendButton.click();
          console.log('Send button clicked!');
        if(next_msg_send == ''){ var msg = next_msg_send ;  } else { var msg = 'custom msg 11. '  ; }
        
        const interval11 = setInterval(() => {
          
        const link = `https://web.whatsapp.com/send?phone=${number22}&text=${encodeURIComponent(msg)}`;
     window.location.href = link;
          
          }, 2000);
          
        
      } else {
          console.error('Send button not found.');
        
        if(number11 != ''){
          if(msg_send == ''){ var msg = msg_send ;  } else { var msg = 'custom msg 11. '  ; }
          
          const interval11 = setInterval(() => {
            
     const link = `https://web.whatsapp.com/send?phone=${number11}&text=${encodeURIComponent(msg)}`;
     window.location.href = link;
          }, 2000);
          
        }
        
        
      }
      
      
    }, break_between_msg); //}, 4000);
            
            
            
            
            
          }
         });

   
      
      
      
    }, 1000);
});
