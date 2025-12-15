import React from 'react';

const Confirmation = ({ booking, onCancel }) => {
  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Reservation Confirmed ✅</h2>
      <p><strong>Room Number:</strong> {booking.roomNumber}</p>
      <p><strong>Customer Name:</strong> {booking.customerName}</p>

      <button onClick={onCancel} style={{ marginTop: '10px' }}>
        Cancel Booking ❌
      </button>
    </div>
  );
};

export default Confirmation;
