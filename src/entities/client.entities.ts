import { Entity, OneToMany, CreateDateColumn, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { Contact } from "./contact.entities";
import { getRounds, hashSync } from "bcryptjs";

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

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const rounds:number = getRounds(this.password)

        if(!rounds){
            this.password = hashSync(this.password, 10)
        }
    }
}

export {Client}