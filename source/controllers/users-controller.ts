import {Request, Response, NextFunction} from "express"

const users = [
	{ username: "alfred", age: "64", uuid: "0"},
	{ username: "robin", age: "19", uuid: "1" }
]

export default class UserControl {
	public async index (req: Request, res: Response, next: NextFunction){
		res.status(200).json(users)
	}
}
