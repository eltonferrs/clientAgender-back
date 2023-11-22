import { Entity, ManyToOne, CreateDateColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { Client } from "./client.entities";

@Entity("contacts")
class Contact{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({length:45})
    name: string;

    @Column()
    email: string;

    @Column()
    cellphone:string;

    @CreateDateColumn({type:'date'})
    registered: string;

    @ManyToOne(()=> Client, (c)=> c.id)
    client:Client;
}

export {Contact}