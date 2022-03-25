const router = require("express").Router();
const nodemailer = require("nodemailer");


router.post('/contact', (req,res) => {
  const data = req.body;
  if (data.name === "" || data.email === "" || data.message === "")
  {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "robertshort5511@gmail.com",
      pass: "Lauren11?",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "robertshort5511@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => 
  {
    try 
    {
      if (error)
      {
        return res.status(400).json({ msg: "Please Fill In All The Fields!" });
      }
      res.status(200).json({ msg: "Thank You I Will Contact You Soon." });
    } 
    catch (error) 
    {
      if (error) return res.status(500).json({ msg: "There Is A Server Error" })
    }
  });
});
module.exports = router;