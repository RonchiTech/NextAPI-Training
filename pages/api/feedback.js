import fs from 'fs';
import path from 'path';
function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedback = req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };
    //going to the current project path
    const filePath = path.join(process.cwd(), 'database', 'feedback.json');
    //reading the file synchronously
    const fileData = fs.readFileSync(filePath);
    //convert from JSON to Object
    const data = JSON.parse(fileData);

    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({
      message: 'Success!',
      feedback: newFeedback,
    });
  } else {
    res.status(200).json({
      message: 'It is working!',
    });
  }
}
export default handler;
