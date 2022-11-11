import express, {Response, Request, NextFunction} from "express"

const router = express.Router()

const users = [
	{ username: "alfred", age: "64", uuid: "0"},
	{ username: "robin", age: "19", uuid: "1" }
]

router.get("/users", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(users)
})

router.get("/users/:uuid", (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
	const uuid = req.params.uuid
	const requestedUser = users.find((user) => user.uuid == uuid)
	res.status(200).json(requestedUser)
})

router.post("/users", (req: Request, res: Response, next: NextFunction) => {
	const newUser = req.body
	users.push(newUser)
	res.status(201).json(newUser)
})

export default router
