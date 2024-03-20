"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "providerId", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    
    await queryInterface.addColumn("Users", "provider", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    
    await queryInterface.addIndex('Users', ['providerId'], {
      unique: true,
      name: 'user_provider_id'
    });
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('Users', 'user_provider_id'); 
    await queryInterface.removeColumn("Users", "providerId");
    await queryInterface.removeColumn("Users", "provider");
  },
};
