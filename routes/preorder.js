const express = require('express');
const router = express.Router();

// Store pre-orders in memory (in production, use a database)
const preorders = [];

// POST /api/preorder - Submit a pre-order
router.post('/', (req, res) => {
    try {
        const { email, name, plan, message } = req.body;

        // Validation
        if (!email || !plan) {
            return res.status(400).json({ 
                error: 'Email and plan are required' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format' 
            });
        }

        // Create pre-order entry
        const preorder = {
            id: Date.now().toString(),
            email,
            name: name || '',
            plan,
            message: message || '',
            createdAt: new Date().toISOString(),
            status: 'pending'
        };

        preorders.push(preorder);

        // In production, save to database here
        console.log('New pre-order received:', preorder);

        res.status(201).json({
            success: true,
            message: 'Pre-order submitted successfully! We\'ll be in touch soon.',
            preorderId: preorder.id
        });
    } catch (error) {
        console.error('Pre-order error:', error);
        res.status(500).json({ 
            error: 'Failed to process pre-order',
            message: error.message 
        });
    }
});

// GET /api/preorder - Get all pre-orders (admin only - add authentication in production)
router.get('/', (req, res) => {
    res.json({
        success: true,
        count: preorders.length,
        preorders: preorders
    });
});

module.exports = router;

