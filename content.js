
console.log('yes');
$(document).ready(function() {
    console.log("Function is ready!");

  
    setTimeout(function() {
        
      
    const my_api_link = 'https://memojobs.com/bw/';


  var dataString11 = '&form_id='+'4&html=qw';
   $.ajax({
          type: 'POST',
          url: my_api_link,
          data:dataString11,        
          success: function (response) {

            if (response.startsWith("{") || response.startsWith("[")) {




            const data = JSON.parse(response);
              console.log(data[0]) ;
             console.log('dd') ;
             console.log(data[1]) ;
                            
            const number11 = data[0].number;            
            const msg_send = data[0].msg;
            // if(data[1] !=''){
            // const number22 = data[1].number;
            //  const next_msg_send = data[1].msg;
            // }else{
            //     const number22 = '';
            //     const next_msg_send = '';
            // }
            let number22 = '';
            let next_msg_send = '';

            if (data.length > 1 && data[1] !== undefined) {
                number22 = data[1].number || '';
                next_msg_send = data[1].msg || '';
            } 
            console.log(number11) ;
            
            const break_between_msg = data[0].break * '1000';
            
               
            // console.log(number22) ;

   
    const interval = setInterval(() => {
        
      
      const sendButton = document.querySelector('button[aria-label="Send"]');

     
      if (sendButton) {
          sendButton.click();
          console.log('Send button clicked!');
        if(next_msg_send != ''){ var msg = next_msg_send ;  } else { var msg = 'custom msg 1122 . '  ; }
        
        const interval11 = setInterval(() => {
            if(number22 ==''){ alert('list completed .') ;}else{
        const link = `https://web.whatsapp.com/send?phone=${number22}&text=${encodeURIComponent(msg)}`;
     window.location.href = link;
          
            }

          }, 3000);
          
        
      } else {
          console.error('Send button not found.');
        
        if(number11 != ''){
          if(msg_send != ''){ var msg = msg_send ;  } else { var msg = 'custom msg 1122 . '  ; }
          
          const interval11 = setInterval(() => {
            
     const link = `https://web.whatsapp.com/send?phone=${number11}&text=${encodeURIComponent(msg)}`;
     window.location.href = link;
          }, 3000);
          
        }
        
      }
      
      
    }, break_between_msg); 
            
            
            
                    
        } else {
            console.error('Response is not JSON:', response);
            // Handle the non-JSON response (e.g., alert user, log error, etc.)

            const sendButton1122 = document.querySelector('button[aria-label="Send"]');
           
            const interval1122 = setInterval(() => { 
      if (sendButton1122) {
        sendButton1122.click();
          console.log('Send button clicked!');
                    
            alert('list completed .') ;
      }
    }, 2000);
        }





            
          }
         });

   
      
      
      
    }, 1000);
});
