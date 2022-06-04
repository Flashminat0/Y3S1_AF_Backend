export const approveProject = async (req, res) => {
    const {studentId, staffId, role} = req.body

    return res.status(200).json({studentId, staffId, role})
}

export const rejectProject = async (req, res) => {
    const {studentId, staffId, role} = req.body

    return res.status(200).json({studentId, staffId, role})
}
