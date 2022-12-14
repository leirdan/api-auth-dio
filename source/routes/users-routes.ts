import express, {Response, Request, NextFunction} from "express"

const router = express.Router()

interface IUser {
	username: string,
	age: number | string,
	uuid: number | string
}

const users: Array<IUser>| undefined = [
	{ username: "alfred", age: 64, uuid: 0},
	{ username: "robin", age: 19, uuid: 1 }
]

router.get("/users", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(users)
})

router.get("/users/:uuid", (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
	const uuid = Number(req.params.uuid)
	const requestedUser = users.find((user) => user.uuid == uuid)
	res.status(200).json(requestedUser)
})

router.post("/users", (req: Request, res: Response, next: NextFunction) => {
	const newUser = req.body
	users.push(req.body)
	res.status(201).json(newUser)
})

router.put("/users/:uuid", (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
	const uuid = Number(req.params.uuid)
	let userSelect = users.find((user) => user.uuid == uuid)
	const alteredUser = req.body
	userSelect = alteredUser
	users.push(alteredUser)
	res.status(200).json(userSelect)
	// TODO fix this, make the app render the normal users and altered users in insomnia
})

router.delete("/users/:uuid", (req: Request, res: Response, next: NextFunction) => {
	const uuid = Number(req.params.uuid)
	const deletedUser: IUser | undefined = users.find((user) => user.uuid == uuid)
	const index = users.indexOf(deletedUser!)
	users.splice(index, 1)
	res.status(200).json(users)
})

export default router
