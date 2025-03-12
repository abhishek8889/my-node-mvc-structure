const { hashPassword } = require('../../Utils/helper');
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

   
        res.status(201).json({
            message: 'User registration api hit successfully!',
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

const login = async (req, res) => {
    try {
        // const { email, password } = req.body;

        // Simulating user login (Replace with actual DB logic)
        // if (email === 'test@example.com' && password === 'password') {
        //     res.status(200).json({ message: 'Login successful!', token: 'dummy_token' });
        // } else {
        //     res.status(401).json({ message: 'Invalid credentials' });
        // }
        res.status(200).json({ message: 'Login successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { register ,login};
