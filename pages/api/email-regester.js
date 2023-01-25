import path from 'path'
import fs from 'fs'
function buildPath(params) {
    return path.join(process.cwd, 'data', 'data.json')
}

function extractData(filePath) {
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData)
    return data
}


export default function handler(req, res) {
    const { method } = req

    // Access our data
    // extract our Data (All Events)
    // res 404 if there are no AllEvents
    // ALL Events - loop through them and identify the Event ID
    // add the email into emails _ registered
    // omly if that email doesn;t exist 
    // check the format of email is OK


    const filePath = buildPath()
    const { events_categories, allEvents } = extractData(filePath)


    if (!allEvents) {
        return res.status(404).json({
            status: 404,
            message: 'Events data not found'
        })
    }

    if (method === 'POST') {
        const { email, eventId } = req.body

        const newAllEvents = allEvents?.map(ev => {
            if (ev?.id === eventId) {
                if (ev?.emails_registered?.includes(email)) {
                    res.status(201).json({ message: 'This email has already been registered' })
                    return ev
                }
                return { ...ev, emails_registered: [...ev?.emails_registered, email] }
            }
            return ev
        })

        fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }))

        res.status(200).json({ message: `You has been regestired successfully with the email: ${email}` })
    }

}