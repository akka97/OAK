import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Area } from "src/area/models/area.entity";

@Entity('gyms')
export class Gym {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ unique: true })
    address: string;

    @Column({ unique: true })
    latitude: number;

    @Column({ unique: true })
    longitude: number;

    @Column()
    is_active: boolean;

    @Column()
    basic_plan: boolean;

    @Column()
    premium_plan: boolean;

    @Column()
    opening: Date;

    @Column()
    closing: Date;

    @Column({ nullable: true})
    rating: number;

    @Column()
    image: string;

}