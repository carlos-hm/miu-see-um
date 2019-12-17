const User = require('../models/User');
const Museum = require('../models/Museum');

exports.signup = async (req, res, next) => {
  const user = await User.register(
    { ...req.body },
    req.body.password
  ).catch(err => res.status(500).json({ err }))

  const museum = await Museum.create({
    name: 'Museum name',
    short: 'SHORT',
    description: 'Museum description',
    address: 'Museum address',
    ticket: 'Ticket $price',
    photoURL: 'https://www.saint-gobain.com.mx/sites/sgmx.master/files/muac_c_0.jpg',
    updated: false,
    "hours": { 
    	"monday": "closed",
    	"tuesday": "closed",
    	"wednesday": "10AM–6PM", 
    	"thursday": "10AM–8PM", 
    	"friday": "10AM–6PM",
    	"saturday": "10AM–8PM",
    	"sunday": "10AM–6PM"
	},
    creatorID: user._id,
  });

  return res.status(201).json({ user, museum });
};

exports.login = (req, res, next ) => {
  res.status(200).json({ user: req.user })
};

exports.getUser = async (req, res, next ) => {
  const user = await User.findById(req.user._id)
  res.status(200).json({ user })
};

exports.logout = (req, res, next) => {
  req.logout()
  res.clearCookie('connect.sid')
  res.status(200).json({ msg: 'Logged Out' })
}