import {
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

import { Optional } from 'sequelize';
import { UserAttributes } from '../interface/user.interface';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<UserAttributes> {

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
  declare password: string;
}