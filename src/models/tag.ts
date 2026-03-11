import { Table, Model, Column, CreatedAt, UpdatedAt, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

interface TagAttributes{
    id: number;
    name: string;
    categoria: string;

}

interface tagCreationAttributes extends Optional<TagAttributes, 'id'>{}

@Table ({
    tableName: "Tag"
})
export class Tag extends Model<TagAttributes, tagCreationAttributes>{

    @Column
    name!: string;

    @Column({
        type: DataType.STRING
    })
    categoria!:string;
}