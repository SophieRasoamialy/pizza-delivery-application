const nodemailer = require('nodemailer');

// Création d'un objet de transporteur SMTP pour Gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Port SSL/TLS pour Gmail
    secure: true, // true pour le port 465 (SSL), false pour les autres ports
    auth: {
        user: 'brightmadadesign@gmail.com',
        pass: 'gejd njir tllc gpnc'
    }
});

// Adresse e-mail de l'expéditeur
const EMAIL_FROM = 'brightmadadesign@gmail.com';

// Fonction pour envoyer un e-mail de vérification
exports.sendVerificationEmail = async (email, verificationToken) => {
    try {
        // Configurer le contenu de l'e-mail
        const mailOptions = {
            from: EMAIL_FROM,
            to: email,
            subject: 'Verify your email',
            html: `
                <p>Please click the following link to verify your email:</p>
                <a href="http://localhost:3000/verify-email/${verificationToken}">Verify Email</a>
            `
        };

        // Envoyer l'e-mail
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Error sending verification email');
    }
};

// Fonction pour envoyer un e-mail de réinitialisation de mot de passe
exports.sendPasswordResetEmail = async (email, resetToken) => {
    try {
        // Configurer le contenu de l'e-mail
        const mailOptions = {
            from: EMAIL_FROM,
            to: email,
            subject: 'Reset your password',
            html: `
                <p>Please click the following link to reset your password:</p>
                <a href="http://localhost:3000/verify-email/reset-password/${resetToken}">Reset Password</a>
            `
        };

        // Envoyer l'e-mail
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw new Error('Error sending password reset email');
    }
};

