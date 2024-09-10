// models/payment.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Reservation = require('./Reservation');

const Payment = sequelize.define('Payment', {
  paymentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.ENUM('Credit Card', 'Debit Card', 'Cash'),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Completed', 'Pending'),
    defaultValue: 'Pending'
  }
});

Payment.belongsTo(Reservation, { foreignKey: 'reservationId' });

module.exports = Payment;
