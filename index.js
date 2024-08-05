const express= require("express")
const app = express()
const UserRouter = require("./routes/userRouter")
const SuggestionRouter = require("./routes/suggestionRouter")
const EventRouter = require("./routes/eventRouter")
const BlogRouter = require("./routes/blogRouter")
const ResumeRouter = require("./routes/resumeRouter")

const PORT = process.env.PORT || 3001 ;
const cors = require("cors")
app.use(cors())
require("./dbconnect")
app.use(express.json())

app.use("/api/blogs",BlogRouter)
app.use("/api/suggestions",SuggestionRouter)
app.use("/api/users",UserRouter)
app.use("/api/events",EventRouter)
app.use("/api/resume",ResumeRouter)


const todos = [
    {
      id: 1,
      title: 'Complete the project report',
      completed: false,
      dueDate: '2024-08-10'
    },
    {
      id: 2,
      title: 'Buy groceries',
      completed: true,
      dueDate: '2024-08-05'
    },
    {
      id: 3,
      title: 'Schedule a meeting with the team',
      completed: false,
      dueDate: '2024-08-15'
    },
    {
      id: 4,
      title: 'Update the portfolio website',
      completed: false,
      dueDate: '2024-08-20'
    }
  ];
  
app.get("/api/todos",(req,res)=>{
    res.status(200).send(todos);
})


app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})