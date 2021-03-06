import { Sequelize, Model } from 'sequelize';
import sequelize from '../lib/db';
import { config } from 'lin-mizar';

class Sentence extends Model {
//   toJSON () {
//     const origin = {
//       id: this.id,
//       title: this.title,
//       author: this.author,
//       summary: this.summary,
//       image: this.image
//     };
//     return origin;
//   }
}

Sentence.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: Sequelize.STRING(64),
      get() {
        const image = this.getDataValue('image');
        return config.getItem('localMainImgUrlPrefix') + image;
      }
    },
    content:{
        type: Sequelize.STRING(300),
        allowNull:true
    },
    pubdate:{
        type: Sequelize.DATE,
        allowNull: true
    },
    fav_nums: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    title: {
      type: Sequelize.STRING(50)
    },
    type:{
        type: Sequelize.INTEGER
    },
    status:{
        type: Sequelize.INTEGER
    }
  },
  {
    tableName: 'sentence',
    modelName: 'sentence',
    paranoid: true,
    timestamps:true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    sequelize
  }
);

export { Sentence as SentenceModel };