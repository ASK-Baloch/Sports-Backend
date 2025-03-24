import Profile from '../models/profile.model.js';

export const  getProfile = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.id);
        res.json(profile);
    } catch (error) { 
        res.status(500).json({ message: error.message });
    }
}

export const  createProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const  updateProfile = async (req, res) => {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const  deleteProfile = async (req, res) => {
    try {
        await Profile.findByIdAndDelete(req.params.id);
        res.json({ message: 'Profile deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}