const express = require('express');
const router = express.Router();

// Store contact messages in memory (in production, use a database)
const contacts = [];

// POST /api/contact - Submit a contact form
router.post('/', (req, res) => {
    try {
        const { email, name, subject, message } = req.body;

        // Validation
        if (!email || !message) {
            return res.status(400).json({ 
                error: 'Email and message are required' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format' 
            });
        }

        // Create contact entry
        const contact = {
            id: Date.now().toString(),
            email,
            name: name || '',
            subject: subject || 'General Inquiry',
            message,
            createdAt: new Date().toISOString(),
            status: 'new'
        };

        contacts.push(contact);

        // In production, save to database and send email notification here
        console.log('New contact message received:', contact);

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We\'ll get back to you soon.',
            contactId: contact.id
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            error: 'Failed to send message',
            message: error.message 
        });
    }
});

// GET /api/contact - Get all contact messages (admin only - add authentication in production)
router.get('/', (req, res) => {
    res.json({
        success: true,
        count: contacts.length,
        contacts: contacts
    });
});

module.exports = router;

