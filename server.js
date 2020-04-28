const express = require ('express')
const bodyParser = require ('body-parser')
const nodemailer = require ('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Detalne informacije</h3>
        <ul>
            <li>Name ${req.body.name}</li>
            <li>Email ${req.body.email}</li>
        </ul>
        <h3>Poruka</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'radevig18@gmail.com',
                pass: 'radevig1234567890'
            },
            tls:{
                rejectUnauthorized: false,
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: 'radevig18@gmail.com',
            subject: 'Nova poruka E-Home' ,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Message sent')
            
        })

    })
})


app.post('/api/email', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
      <h3>Detalne informacije</h3>
      <ul>
          <li>Email ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>Prijavujem se na vash newslater</p>
      `

      let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: 'radevig18@gmail.com',
            pass: 'radevig1234567890'
          },
          tls:{
              rejectUnauthorized: false,
          }
      })

      let mailOptions = {
          from: req.body.email,
          to: 'radevig18@gmail.com',
          subject: 'Newsleter prijavljivanje' ,
          text: req.body.message,
          html: htmlEmail
      }

      transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
              return console.log(err)
          }
          console.log('Message sent')
      })

  })
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})