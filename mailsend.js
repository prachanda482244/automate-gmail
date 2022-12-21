const nodemailer =require('nodemailer');

const mailTransporter = nodemailer.createTransport({
  service:'hotmail',
  auth:{
    user:'recoverloan13579@outlook.com',
    pass:'abcde12345@#'
  }
});

let details = {
  from:'recoverloan13579@outlook.com',
  to:'shashiprince786@gmail.com ',
  subject:'No subject',
  text:'Payment ...!! Payment ...!!Payment ...!!Payment ...!!Payment ...!!Payment ...!! '
  // text:`Dear sir/madam,
  //     I'm from loan company and you have a loan on our app 
  //     and your due date is about to end so pay the loan as soon as possible.
  //     Thank you.
  // `
}
const send = ()=>{

  mailTransporter.sendMail(details,(err)=>{
    if(!err){
      console.log('Mail sent');
    }else{
      console.log(err);
    }
  })
}

setInterval(() => {
  send();
}, 2000);
