import { DataTypes, Model, InferAttributes, InferCreationAttributes } from 'sequelize';
import { chat_bot } from '../connections/chat-bot-92';

class Pyumbo extends Model<InferAttributes<Pyumbo>, InferCreationAttributes<Pyumbo>> {
  declare cedula: number
  declare nombre: string
  declare telefono: string
  declare correo: string
  declare telwhats: string
  declare fregistro: Date
}

Pyumbo.init({
  cedula: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
  nombre: { type: DataTypes.STRING, allowNull: false },
  telefono: { type: DataTypes.STRING, allowNull: false },
  correo: { type: DataTypes.STRING, allowNull: false },
  telwhats: { type: DataTypes.STRING, allowNull: false },
  fregistro: { type: DataTypes.DATE, allowNull: false }
}, {
  sequelize: chat_bot,
  tableName: 'personayumbo',
  timestamps: false
})

export { Pyumbo }