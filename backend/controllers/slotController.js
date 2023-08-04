const asyncHandler = require('express-async-handler')

const Slot = require('../models/slotModel')

// @desc    Get slots
// @route   GET /api/slots
// @access  Private
const getSlots = asyncHandler(async (req, res) => {
  const slots = await Slot.find()

  res.status(200).json(slots)
})


// @desc    Update slots
// @route   PUT /api/slots/:id
// @access  Private
const updateSlots = asyncHandler(async (req, res) => {
  const slotDay = await Slot.find({date:req.query.date})

  if (!slotDay) {
    res.status(400)
    throw new Error('Date  not found')
  }

  

 

  // const updatedDlot = await Slot.findOneAndUpdate(req.params.date, req.body, {
  //   new: true,
  // })

  res.status(200).json(slotDay)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private


module.exports = {
 getSlots,updateSlots
}
