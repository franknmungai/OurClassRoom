const sgMail = require('@sendgrid/mail');
// * set the API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (address, name) => {
	try {
		await sgMail.send({
			to: address,
			from: 'frankmungai6@gmail.com',
			subject: 'Thanks for starting this journey with us',
			html: `<html>
            <h1>Hello ${name}</h1>
            <p>Thank you for joing OurClassRoom. 
            We hope that you enjoy learning web development along with us. 
            We will not use your email for spam. Anything you receive from us will be educative and aimed at enhancing your coding skills 
            If you have any concerns you can contact us: 
            </P>
            <ul> 
                <li>Doreen Chemweno: 0729488149</li>
                <li>Ivy Walobwa: 0705931860</li>
                <li>Collins Kesuibai: 0710285805</li>
                <li>Frank Mungai: 0707651272</li>
                <li>Dan James: 0713014787</li>
             </ul>
             <p>If not interested in our emails, You can unsubscribe any time from <a href="#"> here <a/></p>
            <h4>Our Official web app with a contact form, and a live classroom is coming soon, watch out :) Nice time ${name}</h4>
            </html>`
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = sendEmail;
