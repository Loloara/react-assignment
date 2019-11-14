import { Model } from 'sequelize';

export default class Product extends Model {
  public id!: number;
  public userId!: string;
  public category!: number;
  public title!: string;
  public description!: string;
  public price!: number;
  public carModelYear!: number;
  public carMileage!: number;
  public smoking!: boolean;
  public image!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
