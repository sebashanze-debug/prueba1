export const UploadImage = (req: any, res: any, next: any) => {
    if (!req.file) {
        return next()
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`
    req.file.firebaseUrl = `${baseUrl}/uploads/${req.file.filename}`
    return next()
}
