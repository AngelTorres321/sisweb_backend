import { Model } from "sequelize-typescript";
import { Optional } from "sequelize";
interface TagAttributes {
    id: number;
    name: string;
    categoria: string;
}
interface tagCreationAttributes extends Optional<TagAttributes, 'id'> {
}
export declare class Tag extends Model<TagAttributes, tagCreationAttributes> {
    name: string;
    categoria: string;
}
export {};
//# sourceMappingURL=tag.d.ts.map