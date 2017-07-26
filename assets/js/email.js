var contact = $("form#contact");
contact.submit(function(event){
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "gmail";
  var template_id = "template_8UpI8Ipk";

  contact.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"contact")
    .then(function(){ 
      alert("Sent! Thank you for your message.");
      $('#name-input').val('');
      $('#email-input').val('');
      $('#textArea').val('');
       contact.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       contact.find("button").text("Send");
    });
  return false;
});