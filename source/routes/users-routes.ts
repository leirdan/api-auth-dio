import express, {Response, Request, NextFunction} from "express"

const router = express.Router()

router.use("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [
		{
        username: "alfred",
        age: "64"
    	},
		{
        username: "robin",
        age: "19"
    	}
	]
    res.status(200).json(users)
})

export default router
