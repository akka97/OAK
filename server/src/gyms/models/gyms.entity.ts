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

    @Column()
    latitude: number;

    @Column()
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

    @Column()
    rating: number;

    @Column()
    image: string;

    @ManyToMany(() => Area, { eager: true })
    @JoinColumn({ name: "area_id" })
    area: Area
}