import React, { useState } from 'react';
import Confirmation from './Confirmation';

function App() {
  const [rooms, setRooms] = useState([
    { number: 1, isBooked: false, customerName: '' },
    { number: 2, isBooked: false, customerName: '' },
    { number: 3, isBooked: false, customerName: '' },
    { number: 4, isBooked: false, customerName: '' },
    { number: 5, isBooked: false, customerName: '' },
  ]);

  const [currentBooking, setCurrentBooking] = useState(null);
  const [roomInput, setRoomInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  // BOOK ROOM
  const bookRoom = () => {
    const roomNum = parseInt(roomInput);
    const room = rooms.find(r => r.number === roomNum);

    if (room && !room.isBooked && nameInput.trim() !== '') {
      setRooms(
        rooms.map(r =>
          r.number === roomNum
            ? { ...r, isBooked: true, customerName: nameInput }
            : r
        )
      );

      setCurrentBooking({ roomNumber: roomNum, customerName: nameInput });
    } else {
      alert('Room not available or invalid input!');
    }
  };

  // CANCEL ROOM
  const cancelBooking = () => {
    setRooms(
      rooms.map(r =>
        r.number === currentBooking.roomNumber
          ? { ...r, isBooked: false, customerName: '' }
          : r
      )
    );

    setCurrentBooking(null);
    alert('Booking cancelled successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hotel Management System</h1>

      <h3>Rooms</h3>
      <ul>
        {rooms.map(r => (
          <li key={r.number}>
            Room {r.number} – {r.isBooked ? `Booked by ${r.customerName}` : 'Available'}
          </li>
        ))}
      </ul>

      <h3>Book Room</h3>
      <input
        type="number"
        placeholder="Room Number"
        value={roomInput}
        onChange={e => setRoomInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Customer Name"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
      />
      <button onClick={bookRoom}>Book</button>

      {currentBooking && (
        <Confirmation
          booking={currentBooking}
          onCancel={cancelBooking}
        />
      )}
    </div>
  );
}

export default App;
