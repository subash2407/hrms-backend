import {
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';
import { CompanyAttributes } from '../interface/company.interface';

@Table({
    tableName: 'company',
    timestamps: true,
})
export class Company extends Model<CompanyAttributes> {

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER,
    })
    declare id: number;

    @Column({
        type: DataType.STRING,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare email: string;

    @Column({
        type: DataType.STRING,
    })
    declare domain: string;
}