import { Entity, OneToMany, CreateDateColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { Contact } from "./contact.entities";
@Entity("clients")
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length:45})
    name: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column()
    cellphone: string

    @CreateDateColumn({type:'date'})
    started: string

    @OneToMany(()=> Contact, (ct)=>ct.client)
    contacts: Contact[]
}

export {Client}