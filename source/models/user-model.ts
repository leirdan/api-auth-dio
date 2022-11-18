import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	uuid!: number | string;

	@Column()
	username!: string;

	@Column()
	age!: number;
}
